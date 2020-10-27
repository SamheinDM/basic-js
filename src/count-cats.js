const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let reg = /^\^\^/g;
  let catsCounter = 0;

  if (arr === null) return 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === null) {
      continue;
    }
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === null || arr[i][j] === undefined) {
        continue;
      }
      let str = arr[i][j].toString();
      let match = str.match(reg) || [];
      if (match.length === 1) {
        catsCounter++;
      }
    }
  }

  return catsCounter;
};
