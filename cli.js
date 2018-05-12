#!/usr/bin/env node
'use strict';

const meow = require('meow');
const updateNotifier = require('update-notifier');
const emoji = require('node-emoji');

const pkg = require('./package.json');
const sync = require('./index');

const cli = meow(
  `
Usage
	$ npm-sync <input> [options]

Options
  -t, --token Your GitHub token.
  -i, --id ID of Gist that is used by this module.
  -h, --help Show this help message.
  -v, --version Show version information.

Examples
  $ npm-sync init -t 123e4567f89
  $ npm-sync i -t 123e4567f89
  $ npm-sync init -t 123e4567f89 -i 123456789
  $ npm-sync download
  $ npm-sync dl
  $ npm-sync upload
  $ npm-sync up

Read the complete documentation ${emoji.get(
    'book'
  )} at https://github.com/riyadhalnur/npm-modules-sync/blob/master/docs/docs.md ${emoji.get(
    'rocket'
  )}.
`,
  {
    flags: {
      token: {
        type: 'string',
        alias: 't'
      },
      id: {
        type: 'string',
        alias: 'i'
      }
    }
  }
);

updateNotifier({ pkg }).notify();
sync(cli.input[0], cli.flags);
