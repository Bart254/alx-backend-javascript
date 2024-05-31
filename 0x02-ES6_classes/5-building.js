/* eslint-disable no-underscore-dangle, class-methods-use-this */

export default class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error('Abstract class');
    }
    this.sqft = sqft;
  }

  // setter function for sqft
  set sqft(value) {
    this._sqft = value;
  }

  // getter function for sqft
  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
