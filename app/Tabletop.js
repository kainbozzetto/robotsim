'use strict';

class Tabletop {
  constructor(width, height) {
    if (!Number.isInteger(width)) {
      throw 'Width is not an integer';
    }

    if (!Number.isInteger(height)) {
      throw 'Height is not an integer';
    };

    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  set width(width) {
    if (!Number.isInteger(width)) {
      throw 'Width is not an integer';
    }

    this._width = width;
  }

  get height() {
    return this._height;
  }

  set height(height) {
    if (!Number.isInteger(height)) {
      throw 'Height is not an integer';
    }

    this._height = height;
  }

  isValidPosition(x, y) {
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
      throw 'Either one or more inputs are not integers';
    }

    if (x < 0 || y < 0 || x >= this.width || y >= this.height) {
      return false;
    }

    return true;
  }
}

module.exports = Tabletop;