// @flow
'use strict';

const gist = require('gh-got');

const endpoint = 'https://api.github.com/gists';

const createGist = (token: string): Promise<Object> => {
  return new Promise((resolve, reject) => {
    gist(endpoint, {
      token: token,
      method: 'POST',
      body: { files: {
        'packages.json': {
          content: {}
        }
      }}
    }).then(result => {
      resolve(result.body);
    }).catch(err => {
      reject(err);
    });
  });
};

const updateGist = (token: string, gistId: string): Promise<Object> => {
  return new Promise((resolve, reject) => {
    gist(`${endpoint}/${gistId}`, {
      token: token,
      method: 'PATCH',
      body: { files: {
        'packages.json': {
          content: {}
        }
      }}
    }).then(result => {
      resolve(result.body);
    }).catch(err => {
      reject(err);
    });
  });
};

module.exports = {
  create: createGist,
  update: updateGist
};
