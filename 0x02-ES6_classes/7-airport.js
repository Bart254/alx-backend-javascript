/* eslint-disable no-underscore-dangle */

export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  // setter and getter for code
  set code(value) {
    this._code = value;
  }

  get code() {
    return this._code;
  }

  // setter and getter for name
  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
