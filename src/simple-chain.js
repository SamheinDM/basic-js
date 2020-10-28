const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    if (this.result === []) {
      this.result = [`( ${value.toString()} )`];
    } else {
      this.result = this.result.push(`~~( ${value.toString()} )`);
    }
    return this.result;
  },
  removeLink(position) {
    this.result.splice(position - 1, 1);
  },
  reverseChain() {
    this.result.reverse();
  },
  finishChain() {
    return this.result.join('');
  }
};

module.exports = chainMaker;
