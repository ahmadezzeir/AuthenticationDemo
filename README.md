## angular2-seed with ADAL

A simple starter project showing how to use [ADAL](https://github.com/AzureAD/azure-activedirectory-library-for-js/) with Angular2


### Usage
- Clone or fork this repository
- Make sure you have [node.js](https://nodejs.org/) installed version 5+
- Make sure you have NPM installed version 3+
- `WINDOWS ONLY` run `npm install -g webpack webpack-dev-server typescript` to install global dependencies
- run `npm install` to install dependencies
- setup your Azure Active Directory and Register your application (https://docs.microsoft.com/en-us/azure/active-directory/active-directory-app-registration)
- update /services/config.service.ts with your Tenant and ClientIDs
- run `npm start` to fire up dev server
- open browser to [`http://localhost:5000`](http://localhost:5000)
- if you want to use other port, open `package.json` file, then change port in `--port 5000` script

