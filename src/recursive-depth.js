const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1,
        depth = 1;

    for (let item of arr) {
      if (Array.isArray(item)) {
        counter +=  this.calculateDepth(item);
      }
      if (counter > depth) depth = counter;
      counter = 1;
    }

    return depth;
  }
};