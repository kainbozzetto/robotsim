'use strict';

class Tabletop {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get width() {
    return this.private_width;
  }

  set width(width) {
    if (!Number.isInteger(width) || width <= 0) {
      throw Error('width is not an integer or > 0');
    }

    this.private_width = width;
  }

  get height() {
    return this.private_height;
  }

  set height(height) {
    if (!Number.isInteger(height) || height <= 0) {
      throw Error('height is not an integer or > 0');
    }

    this.private_height = height;
  }

  isValidPosition(x, y) {
    // verify inputs
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
      throw Error('either one or more inputs are not integers');
    }

    // if either x or y is outside the bounding box then return false
    if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
      return false;
    }

    return true;
  }
}

module.exports = Tabletop;
