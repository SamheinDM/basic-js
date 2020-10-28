const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (arr === [] || !arr.sort) {
    throw new UserException('THROWN');
  }

  let discNext = '--discard-next',
      discPrev = '--discard-prev',
      doubNext = '--double-next',
      doubPrev = '--double-prev',
      result = [];

  for (let i = 0; i < arr.length; i++) {

    if        (arr[i] === discNext) {
      if (arr[i + 1] === undefined){
        continue;
      } else if (arr[i + 2] === discPrev || arr[i + 2] === doubPrev) {
        i++;
      }
      i++;
    } else if (arr[i] === discPrev) {
      if (result[result.length - 1] === undefined) {
        continue;
      }
      result.pop();
    } else if (arr[i] === doubNext) {
      if (arr[i + 1] === undefined) {
        continue;
      }
      result = [...result, arr[i + 1], arr[i + 1]];
      i++;
    } else if (arr[i] === doubPrev) {
      if (arr[i - 1] === undefined) {
        continue;
      }
      result = [...result, arr[i - 1], arr[i - 1]];
    } else {
      result = [...result, arr[i]];
    }
  }

  return result;
};
