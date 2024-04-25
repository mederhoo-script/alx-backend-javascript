export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (value !== 'string') {
      throw new TypeError('Code must be a string');
    } else {
      this._code = value;
    }
  }

  get name() {
    return this_name;
  }

  set name(value) {
    if (value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}