/* eslint no-console: 0 */
'use strict';

const emoji = require('node-emoji');
const chalk = require('chalk');

const store = require('./build/store');
const tasks = require('./build/tasks');

module.exports = (opts, flags) => {
  if (!opts) {
    console.log(
      `${chalk.red.bold(
        'Please pass in a command to execute.'
      )} For more information, pass in ${chalk.yellow(
        '--help'
      )} to show help information.`
    );
    return;
  }

  switch (opts) {
    case 'upload':
    case 'up':
      tasks.upload.run({
        token: store.get('token'),
        gistId: store.get('gistId'),
      });
      break;
    case 'download':
    case 'down':
    case 'dl':
      tasks.download.run({
        token: store.get('token'),
        gistId: store.get('gistId'),
      });
      break;
    case 'init':
    case 'i':
      if (flags.token && !flags.id) {
        tasks.init
          .run({
            token: flags.token,
          })
          .then((ctx) =>
            console.log(`
        Your Gist ID is ${chalk.yellow(ctx.gistId)}.
        ${chalk.red.bold('Please')} note it down.
        You will need this when configuring machines
        ${emoji.get('computer')} to sync with.
        `)
          )
          .catch((err) => console.log(err));
      } else {
        tasks.initSlave.run({
          token: flags.token,
          gistId: flags.id,
        });
      }

      break;
    default:
      break;
  }
};
