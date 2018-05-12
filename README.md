![Logo](img/logo.png)  

[![Coverage Status](https://coveralls.io/repos/github/riyadhalnur/npm-modules-sync/badge.svg?branch=master)](https://coveralls.io/github/riyadhalnur/npm-modules-sync?branch=master) [![Build Status](https://travis-ci.org/riyadhalnur/npm-modules-sync.svg?branch=master)](https://travis-ci.org/riyadhalnur/npm-modules-sync) [![Build status](https://ci.appveyor.com/api/projects/status/wot1639xtubej0j9?svg=true)](https://ci.appveyor.com/project/riyadhalnur/npm-modules-sync) [![Dependency Status](https://dependencyci.com/github/riyadhalnur/npm-modules-sync/badge)](https://dependencyci.com/github/riyadhalnur/npm-modules-sync) [![Known Vulnerabilities](https://snyk.io/test/github/riyadhalnur/npm-modules-sync/badge.svg)](https://snyk.io/test/github/riyadhalnur/npm-modules-sync) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/riyadhalnur/npm-modules-sync/master/LICENSE) [![npm version](https://badge.fury.io/js/npm-modules-sync.svg)](https://badge.fury.io/js/npm-modules-sync)  

[![NPM](https://nodei.co/npm/npm-modules-sync.png?downloads=true&stars=true)](https://nodei.co/npm/npm-modules-sync/)  

NPM Modules Sync
=================  
> Keep your global NPM packages in sync between machines.  

**TL;DR** While NVM and the likes let you keep packages in sync between multiple version, 
if you develop across multiple machines, you can use this module to keep your global packages in sync.  

### Installation  
`npm install -g npm-modules-sync`  

If you are using [Yarn](https://yarnpkg.com/):  
`yarn global add npm-modules-sync`  

### Usage  
```shell
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
```  

### Documentation  
Read the [DOCUMENTATION](docs/docs.md)  

### Contributing  
Read the [CONTRIBUTING](CONTRIBUTING.md) guide for information.  

### License  
Licensed under MIT. See [LICENSE](LICENSE) for more information.  

### Issues  
Report a bug in [issues](https://github.com/riyadhalnur/npm-modules-sync/issues).   

Made with love in Dhaka, Bangladesh by [Riyadh Al Nur](https://verticalaxisbd.com)
