// @flow
'use strict';

const gist = require('gh-got');

const endpoint = 'gists';

/**
 * Creates a private gist containing a single JSON file
 * @public
 * @param {string} token - GitHub access token
 * @returns {Promise.<Object>} - Returns Promise Object
 */
const createGist = (token: string): Promise<Object> => {
  return new Promise((resolve, reject) => {
    gist(endpoint, {
      token: token,
      method: 'POST',
      body: {
        files: {
          'modules.json': {
            content: JSON.stringify({}),
          },
        },
      },
    })
      .then((result) => {
        resolve(result.body);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

/**
 * Updates an existing gist
 * @public
 * @param {string} token - GitHub access token
 * @param {string} gistId - ID of gist to update
 * @param {Object} packages - Object of NPM packages
 * @returns {Promise.<Object>} - Returns Promise Object
 */
const updateGist = (
  token: string,
  gistId: string,
  packages: Object
): Promise<Object> => {
  return new Promise((resolve, reject) => {
    gist(`${endpoint}/${gistId}`, {
      token: token,
      method: 'PATCH',
      body: {
        files: {
          'modules.json': {
            content: JSON.stringify(packages),
          },
        },
      },
    })
      .then((result) => {
        resolve(result.body);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

/**
 * Read the contents of a given gist
 * @public
 * @param {string} token - GitHub access token
 * @param {string} gistId - ID of gist to read
 * @returns {Promise.<Object>} - Returns Promise Object
 */
const readGist = (token: string, gistId: string): Promise<Object> => {
  return new Promise((resolve, reject) => {
    gist(`${endpoint}/${gistId}`, {
      token: token,
      method: 'GET',
    })
      .then((result) => {
        resolve(result.body.files['modules.json']);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = {
  create: createGist,
  update: updateGist,
  read: readGist,
};
