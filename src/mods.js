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
    execa('npm', ['ls', '-g', '--depth=0', '--json=true'])
      .then((result) => {
        let parsedResult = JSON.parse(result.stdout);
        let packages = Object.keys(parsedResult.dependencies).filter(
          (i) => i !== 'npm' && i !== 'npm-modules-sync'
        );

        if (packages.length === 0) {
          return reject(
            new Error('No global packages found. Nothing to back up. Exiting!')
          );
        }

        resolve(JSON.parse(result.stdout));
      })
      .catch((err) => reject(err.stderr));
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
    let args = ['install', '-g'];

    Object.keys(packages.dependencies)
      .filter((i) => i !== 'npm' && i !== 'npm-modules-sync')
      .map((el) =>
        args.push(`${el}@${packages['dependencies'][el]['version']}`)
      );

    execa('npm', args)
      .then((result) => resolve(result.stdout))
      .catch((err) => reject(err.stderr));
  });
};

module.exports = {
  get: getModules,
  install: installModules,
};
