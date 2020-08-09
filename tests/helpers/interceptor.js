'use strict';

const nock = require('nock');

const endpoint = 'https://api.github.com';
const headers = { authorization: 'token 12345' };

/* eslint-disable */
const response = {
  url: 'https://api.github.com/gists/123456789',
  forks_url: 'https://api.github.com/gists/123456789/forks',
  commits_url: 'https://api.github.com/gists/123456789/commits',
  id: 123456789,
  description: 'description of gist',
  public: false,
  owner: {
    login: 'octocat',
    id: 1,
    avatar_url: 'https://github.com/images/error/octocat_happy.gif',
    gravatar_id: '',
    url: 'https://api.github.com/users/octocat',
    html_url: 'https://github.com/octocat',
    followers_url: 'https://api.github.com/users/octocat/followers',
    following_url:
      'https://api.github.com/users/octocat/following{/other_user}',
    gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/octocat/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
    organizations_url: 'https://api.github.com/users/octocat/orgs',
    repos_url: 'https://api.github.com/users/octocat/repos',
    events_url: 'https://api.github.com/users/octocat/events{/privacy}',
    received_events_url: 'https://api.github.com/users/octocat/received_events',
    type: 'User',
    site_admin: false,
  },
  user: null,
  files: {
    'modules.json': {
      size: 28,
      filename: 'modules.json',
      raw_url:
        'https://gist.githubusercontent.com/octocat/123456789/raw/8c4d2d43d178df44f4c03a7f2ac0ff512853564e/modules.json',
      type: 'application/json',
      language: 'JSON',
      truncated: false,
      content: JSON.stringify({ hey: true, hello: 'world' }),
    },
  },
  truncated: false,
  comments: 0,
  comments_url: 'https://api.github.com/gists/123456789/comments/',
  html_url: 'https://gist.github.com/123456789',
  git_pull_url: 'https://gist.github.com/123456789.git',
  git_push_url: 'https://gist.github.com/123456789.git',
  created_at: '2010-04-14T02:15:15Z',
  updated_at: '2011-06-20T11:34:15Z',
  forks: [
    {
      user: {
        login: 'octocat',
        id: 1,
        avatar_url: 'https://github.com/images/error/octocat_happy.gif',
        gravatar_id: '',
        url: 'https://api.github.com/users/octocat',
        html_url: 'https://github.com/octocat',
        followers_url: 'https://api.github.com/users/octocat/followers',
        following_url:
          'https://api.github.com/users/octocat/following{/other_user}',
        gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/octocat/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
        organizations_url: 'https://api.github.com/users/octocat/orgs',
        repos_url: 'https://api.github.com/users/octocat/repos',
        events_url: 'https://api.github.com/users/octocat/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/octocat/received_events',
        type: 'User',
        site_admin: false,
      },
      url: 'https://api.github.com/gists/dee9c42e4998ce2ea439',
      id: 'dee9c42e4998ce2ea439',
      created_at: '2011-04-14T16:00:49Z',
      updated_at: '2011-04-14T16:00:49Z',
    },
  ],
  history: [
    {
      url:
        'https://api.github.com/gists/123456789/57a7f021a713b1c5a6a199b54cc514735d2d462f',
      version: '57a7f021a713b1c5a6a199b54cc514735d2d462f',
      user: {
        login: 'octocat',
        id: 1,
        avatar_url: 'https://github.com/images/error/octocat_happy.gif',
        gravatar_id: '',
        url: 'https://api.github.com/users/octocat',
        html_url: 'https://github.com/octocat',
        followers_url: 'https://api.github.com/users/octocat/followers',
        following_url:
          'https://api.github.com/users/octocat/following{/other_user}',
        gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/octocat/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
        organizations_url: 'https://api.github.com/users/octocat/orgs',
        repos_url: 'https://api.github.com/users/octocat/repos',
        events_url: 'https://api.github.com/users/octocat/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/octocat/received_events',
        type: 'User',
        site_admin: false,
      },
      change_status: {
        deletions: 0,
        additions: 180,
        total: 180,
      },
      committed_at: '2010-04-14T02:15:15Z',
    },
  ],
};
/* eslint-enable */

const nocks = nock(endpoint, { reqheaders: headers })
  .persist()
  .get('/gists/123456789')
  .reply(200, response)
  .post('/gists', (body) => {
    return typeof body.files['modules.json'].content === 'string';
  })
  .reply(201, response)
  .patch('/gists/123456789', (body) => {
    return typeof body.files['modules.json'].content === 'string';
  })
  .reply(200, response);

module.exports = nocks;
