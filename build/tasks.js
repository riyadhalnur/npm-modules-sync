'use strict';

const Listr = require('listr');

const store = require('./store');
const modules = require('./modules');
const gist = require('./gist');

const token = store.get('token');
const gistId = store.get('gistId');

const initTask = new Listr([
  {
    title: 'Create a new gist on GitHub',
    task: context => gist.create(context.token).then(res => {
      context.gistId = res.id;
    })
  },
  {
    title: 'Store details in config file',
    task: context => {
      store.set('token', context.token);
      store.set('gistId', context.gistId);

      setTimeout(() => {
        Promise.resolve('Done');
      }, 1000);
    }
  }
]);

const dlTask = new Listr([
  {
    title: 'Get list of packages from GitHub',
    task: context => gist.read(token, gistId).then(res => {
      try {
        context.packages = JSON.parse(res.content);
        return Promise.resolve('Done');
      } catch (err) {
        Promise.reject(new Error(err));
      }
    })
  },
  {
    title: 'Install npm packages globally',
    task: context => modules.install(context.packages)
  }
]);

const upTask = new Listr([
  {
    title: 'Get list of globally installed npm packages',
    task: context => modules.get().then(res => {
      context.packages = res;
    })
  },
  {
    title: 'Store list of packages to GitHub',
    task: context => gist.update(token, gistId, context.packages)
  }
]);

const machineSetupTask = new Listr([
  {
    title: 'Writing configuration to disk',
    task: context => {
      store.set('token', context.token);
      store.set('gistId', context.gistId);

      setTimeout(() => {
        Promise.resolve('Done');
      }, 1000);
    }
  },
  {
    title: 'Fetching information from GitHub',
    task: () => {
      return dlTask;
    }
  }
]);

module.exports = {
  init: initTask,
  machineSetup: machineSetupTask,
  download: dlTask,
  upload: upTask
};
