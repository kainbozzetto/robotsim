'use strict';

const Tabletop = require('./Tabletop');
const Robot = require('./Robot');

class App {

  constructor() {
    this.tabletop = new Tabletop(5, 5);
    this.robot = new Robot(this.tabletop);

    this.applicableMethods = ['place', 'left', 'right', 'move', 'report'];
  }

  readLine(line) {
    const data = line.match(/^(\w+)\s*(\d*),*(\d*),*(\w*)$/i);

    if (data) {
      const command = data[1].toLowerCase();
      const x = parseInt(data[2], 10);
      const y = parseInt(data[3], 10);
      const f = data[4].toUpperCase();

      if (this.applicableMethods.indexOf(command) > -1 && this.robot[command]) {
        this.robot[command].call(this.robot, x, y, f);
      }
    }
  }

}

module.exports = App;
