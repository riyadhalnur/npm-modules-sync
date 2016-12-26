// @flow
'use strict';

const execa = require('execa');

/**
 * Returns a list of all globally installed NPM packages
 * @public
 * @returns {Promise.<Object|string>} Returns installed packages/stderr on success/failure.
 */
const getModules = (): Promise<Object | string> => {
  return new Promise((resolve, reject) => {
    execa('npm', ['ls', '-g', '--depth=0', '--json=true']).then(result => {
      resolve(JSON.parse(result.stdout));
    }).catch(err => {
      reject(err.stderr);
    });
  });
};

/**
 * Installs a list of NPM packages in one go globally
 * @public
 * @param {Object} packages - List of packages to install
 * @returns {Promise.<string>} Returns string on success/error
 */
const installModules = (packages: Object): Promise<string> => {
  return new Promise((resolve, reject) => {
    let args = ['install', '-g']
                .concat(Object.keys(packages.dependencies))
                .filter(i => { return i !== 'npm' && i !== 'npm-modules-sync'; }); // eslint-disable-line

    execa('npm', args).then(result => {
      resolve(result.stdout);
    }).catch(err => {
      reject(err.stderr);
    });
  });
};

module.exports = {
  get: getModules,
  install: installModules
};
