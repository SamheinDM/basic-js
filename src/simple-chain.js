const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value = '') {
    this.result.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    if (!isNaN(position) && this.result[position - 1]) {
      this.result.splice(position - 1, 1);
    } else {
      this.result = [];
      throw new Error('Error');
    }
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let answer = this.result.join('~~');
    this.result = [];
    return answer;
  }
};

module.exports = chainMaker;
