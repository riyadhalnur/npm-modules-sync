// @flow
'use strict';

const Configstore = require('conf');
const pkg = require('../package.json');

module.exports = new Configstore({ configName: pkg.name });
