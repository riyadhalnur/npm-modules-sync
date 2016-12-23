![Logo](img/logo.png)  

[![Coverage Status](https://coveralls.io/repos/github/riyadhalnur/npm-modules-sync/badge.svg?branch=master)](https://coveralls.io/github/riyadhalnur/npm-modules-sync?branch=master) [![Build Status](https://travis-ci.org/riyadhalnur/npm-modules-sync.svg?branch=master)](https://travis-ci.org/riyadhalnur/npm-modules-sync) [![Build status](https://ci.appveyor.com/api/projects/status/wot1639xtubej0j9?svg=true)](https://ci.appveyor.com/project/riyadhalnur/npm-modules-sync) [![Dependency Status](https://dependencyci.com/github/riyadhalnur/npm-modules-sync/badge)](https://dependencyci.com/github/riyadhalnur/npm-modules-sync)  

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
	  $ npm-sync <input>  

	Options
    -t, --token Your GitHub token.  
    -i, --id The Gist ID that is used by this module.  
	  -h, --help Show this help message.  
    -v, --version Show version information.  
	Examples  
	  $ npm-sync init -t 123e4567f89
    $ npm-sync init -t 123e4567f89 -i 123456789
    $ npm-sync download
```  

### License  
Licensed under MIT. See [LICENSE](LICENSE) for more information.  

### Issues  
Report a bug in issues.   

Made with love in Dhaka, Bangladesh by [Riyadh Al Nur](https://verticalaxisbd.com)
