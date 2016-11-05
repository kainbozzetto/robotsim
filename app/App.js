'use strict';

const Tabletop = require('./Tabletop');
const Robot = require('./Robot');

class App {

  constructor() {
    this.tabletop = new Tabletop(5, 5);
    this.robot = new Robot(this.tabletop);
  }

  readLine(line) {
    const data = line.match(/^PLACE\s(\d+),(\d+),(\w+)$/i);

    if (data) {
      const x = parseInt(data[1], 10);
      const y = parseInt(data[2], 10);
      const f = data[3].toUpperCase();

      this.robot.place(x, y, f);

      return;
    }

    switch (line) {
      case 'MOVE':
        this.robot.move();
        break;
      case 'LEFT':
        this.robot.left();
        break;
      case 'RIGHT':
        this.robot.right();
        break;
      case 'REPORT':
        this.robot.report();
        break;
      default:
        break;
    }
  }

}

module.exports = App;
