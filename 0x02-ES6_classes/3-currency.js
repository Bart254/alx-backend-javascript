/* eslint-disable no-underscore-dangle */

export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // setter and getter for name
  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  // setter and getter for code
  set code(value) {
    this._code = value;
  }

  get code() {
    return this._code;
  }

  // instance method
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
