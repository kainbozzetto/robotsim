(function() {
  
  'use strict';

  let App = require('./app/App');

  let app = new App();

  let lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('commands.txt')
  });

  lineReader.on('line', app.readLine.bind(app));

}());