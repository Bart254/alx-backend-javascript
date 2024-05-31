/* eslint-disable no-underscore-dangle, no-unused-vars */

export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  // setter and getter for size
  set size(value) {
    this._size = value;
  }

  get size() {
    return this._size;
  }

  // setter and getter for location
  set location(value) {
    this._location = value;
  }

  get location() {
    return this._location;
  }

  // method to return string representation
  toString() {
    return this.location;
  }

  // method to return number representation
  valueOf() {
    return this.size;
  }
}
