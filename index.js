'use strict';

const App = require('./app/App');
const readline = require('readline');
const fs = require('fs');

const app = new App();

const lineReader = readline.createInterface({
  input: fs.createReadStream('commands.txt'),
});

lineReader.on('line', app.readLine.bind(app));
