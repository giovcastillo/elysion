/**
 * @type {string}
 */
let a;

class Letter {
  constructor(char1) {
    this.char = char1;
  }

  toUpperCase() {
    return char.toUpperCase();
  }

  toString() {
    let _vals = ["char"].map((function (_val) {
      let _cont = this[_val];
      return _val + "=" + (typeof _cont === "string" && ('"'+ _cont.replace('"', '\"') +'"') || _cont);
    }).bind(this));

    return `Letter(${_vals.join(", ")})`;
  }
}

a = "Hello!";