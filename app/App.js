'use strict';

let Tabletop = require('./Tabletop'),
    Robot = require('./Robot');

class App {

  constructor() {
    this.tabletop = new Tabletop(5, 5);
    this.robot = new Robot(this.tabletop);  
  }

  readLine(line) {
    let data;
  
    if (data = line.match(/^PLACE\s(\d+),(\d+),(\w+)$/i)) {
      let x = parseInt(data[1]),
          y = parseInt(data[2]),
          f = data[3].toUpperCase();

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
    }
  }
  
}

module.exports = App;