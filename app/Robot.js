'use strict';

class Robot {

  constructor(tabletop) {
    this.tabletop = tabletop;

    // possible facing directions fo the robot
    this.directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
  }

  get tabletop() {
    return this._tabletop;
  }

  set tabletop(tabletop) {
    this._tabletop = tabletop;
  }

  // x position of the robot

  get x() {
    return this._x;
  }

  set x(x) {
    if (!Number.isInteger(x)) {
      throw 'x is not an integer';
    }

    this._x = x;
  }

  // y position of the robot

  get y() {
    return this._y;
  }

  set y(y) {
    if (!Number.isInteger(y)) {
      throw 'y is not an integer';
    }

    this._y = y;
  }

  // the facing direction of the robot dictated by the directions array

  get f() {
    return this._f;
  }

  set f(f) {
    if(this.directions.indexOf(f) == -1) {
      throw 'f is not within directions array';
    }

    this._f = f;
  }

  place(x, y, f) {
    if (this.tabletop.isValidPosition(x, y)) {
      this.x = x;
      this.y = y;
      this.f = f;
    }
  }
}

module.exports = Robot;