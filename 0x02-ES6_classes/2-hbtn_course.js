/* eslint-disable no-underscore-dangle */

export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // setter functions
  set name(value) {
    if (typeof value !== 'string') {
      throw TypeError('Name must be a string');
    } else {
      this._name = value;
    }
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = value;
    }
  }

  set students(value) {
    if (value instanceof Array) {
      for (const data of value) {
        if (typeof data !== 'string') {
          throw new Error('Students must be an array of strings');
        }
      }
      this._students = value;
    } else {
      throw new Error('Students must be an array of strings');
    }
  }

  // getter functions
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
