let a: string;

var char;

class Letter {
  constructor(char1: string) {
    this.char = char1;
  }

  toUpperCase(): number {
    return this.char = true;
  }

  toString() {
    let _vals = ["char"].map((function (_val: any) {
      let _cont = this[_val];
      return _val + "=" + (typeof _cont === "string" && ('"'+ _cont.replace('"', '\"') +'"') || _cont);
    }).bind(this));

    return `Letter(${_vals.join(", ")})`;
  }
}

a = "Hello!";