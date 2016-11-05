'use strict';

class Robot {

  constructor(tabletop) {
    this.tabletop = tabletop;

    // possible facing directions for the robot
    this.directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

    this.placed = false;
  }

  // reference to the tabletop for position based checks
  get tabletop() {
    return this.private_tabletop;
  }

  set tabletop(tabletop) {
    this.private_tabletop = tabletop;
  }

  // x position of the robot
  get x() {
    return this.private_x;
  }

  set x(x) {
    if (!Number.isInteger(x)) {
      throw Error('x is not an integer');
    }

    this.private_x = x;
  }

  // y position of the robot
  get y() {
    return this.private_y;
  }

  set y(y) {
    if (!Number.isInteger(y)) {
      throw Error('y is not an integer');
    }

    this.private_y = y;
  }

  // the facing direction of the robot dictated by the directions array
  get f() {
    return this.private_f;
  }

  set f(f) {
    if (this.directions.indexOf(f) === -1) {
      throw Error('f is not within directions array');
    }

    this.private_f = f;
  }

  place(x, y, f) {
    // verify with the tabletop whether the intended positions are valid
    if (this.tabletop.isValidPosition(x, y)) {
      this.x = x;
      this.y = y;
      this.f = f;

      // set placed to be true, allows for other functions to now be invoked
      this.placed = true;
    }
  }

  left() {
    // check if the robot is placed
    if (this.placed) {
      const i = this.directions.indexOf(this.f);

      // rotate the direction to the left by obtaining the previous index
      this.f = this.directions[i - 1 < 0 ? this.directions.length - 1 : i - 1];
    }
  }

  right() {
    // check if the robot is placed
    if (this.placed) {
      const i = this.directions.indexOf(this.f);

      // rotate the direction to the right by obtaining the next index
      this.f = this.directions[i + 1 >= this.directions.length ? 0 : i + 1];
    }
  }

  move() {
    if (this.placed) {
      let x = this.x;
      let y = this.y;

      // change x or y depending on facing direction
      switch (this.f) {
        case 'NORTH':
          y += 1;
          break;
        case 'EAST':
          x += 1;
          break;
        case 'SOUTH':
          y -= 1;
          break;
        case 'WEST':
          x -= 1;
          break;
        default:
          break;
      }

      // update the robot with new x and y & existing f using place()
      this.place(x, y, this.f);
    }
  }

  report() {
    if (this.placed) {
      console.log(`${this.x},${this.y},${this.f}`);
    }
  }
}

module.exports = Robot;
