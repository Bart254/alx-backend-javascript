/* eslint-disable no-underscore-dangle, no-unused-vars */

import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // setter and getter for amount
  set amount(value) {
    this._amount = value;
  }

  get amount() {
    return this._amount;
  }

  // setter and getter for currency
  set currency(value) {
    this._currency = value;
  }

  get currency() {
    return this._currency;
  }

  // instance method
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  // static method
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
