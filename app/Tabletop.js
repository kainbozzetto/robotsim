'use strict';

class Tabletop {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  isValidPosition(x, y) {
    if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
      return false;
    }
    
    return true;
  }
}

module.exports = Tabletop;