'use strict';

class Tabletop {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get width() {
    return this._width;
  }

  set width(width) {
    if (!Number.isInteger(width) || width <= 0) {
      throw 'width is not an integer or > 0';
    }

    this._width = width;
  }

  get height() {
    return this._height;
  }

  set height(height) {
    if (!Number.isInteger(height)  || height <= 0) {
      throw 'height is not an integer or > 0';
    }

    this._height = height;
  }

  isValidPosition(x, y) {
    // verify inputs
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
      throw 'either one or more inputs are not integers';
    }

    // if either x or y is outside the bounding box then return false
    if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
      return false;
    }

    return true;
  }
}

module.exports = Tabletop;