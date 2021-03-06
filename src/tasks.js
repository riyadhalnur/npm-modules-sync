'use strict';

const Listr = require('listr');

const store = require('./store');
const mods = require('./mods');
const gist = require('./gist');

const dlTask = new Listr([
  {
    title: 'Get list of packages from GitHub',
    task: (context) =>
      gist.read(context.token, context.gistId).then((res) => {
        try {
          context.packages = JSON.parse(res.content);
          return Promise.resolve('Done');
        } catch (err) {
          Promise.reject(new Error(err));
        }
      }),
  },
  {
    title: 'Install npm packages globally',
    task: (context) => mods.install(context.packages),
  },
]);

const upTask = new Listr([
  {
    title: 'Get list of globally installed npm packages',
    task: (context) =>
      mods.get().then((res) => {
        context.packages = res;
      }),
  },
  {
    title: 'Store list of packages to GitHub',
    task: (context) =>
      gist.update(context.token, context.gistId, context.packages),
  },
]);

const initMachineTask = new Listr([
  {
    title: 'Create a new gist on GitHub',
    task: (context) =>
      gist.create(context.token).then((res) => {
        context.gistId = res.id;
      }),
  },
  {
    title: 'Store details in config file',
    task: (context) => {
      store.set('token', context.token);
      store.set('gistId', context.gistId);

      setTimeout(() => {
        Promise.resolve('Done');
      }, 1000);
    },
  },
  {
    title: 'Backing up to GitHub',
    task: () => {
      return upTask;
    },
  },
]);

const initSlaveTask = new Listr([
  {
    title: 'Writing configuration to disk',
    task: (context) => {
      store.set('token', context.token);
      store.set('gistId', context.gistId);

      setTimeout(() => {
        Promise.resolve('Done');
      }, 1000);
    },
  },
  {
    title: 'Fetching information from GitHub',
    task: () => {
      return dlTask;
    },
  },
]);

module.exports = {
  init: initMachineTask,
  initSlave: initSlaveTask,
  download: dlTask,
  upload: upTask,
};
