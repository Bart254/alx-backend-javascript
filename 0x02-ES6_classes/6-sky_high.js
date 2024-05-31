/* eslint-disable no-underscore-dangle */

import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  // setter and getter for sqft
  set sqft(value) {
    this._sqft = value;
  }

  get sqft() {
    return this._sqft;
  }

  // setter and getter for floors
  set floors(value) {
    this._floors = value;
  }

  get floors() {
    return this._floors;
  }

  // instance method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
