const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str = '', options) {
  let string = str,
      result = '',
      repTimes = options.repeatTimes || 1,
      separator = options.separator || '+',
      addition = options.addition || '',
      addRepTimes = options.additionRepeatTimes || 1,
      addSeparator = options.additionSeparator || '',
      countRep = 1,
      countAddRep = 0;

  if (options.addition === false) addition = 'false';
  if (options.addition === null) addition = 'null';


  for (let i = 0; i < repTimes; i++) {
    result += `${String(string)}`;
    for (let j = 0; j < addRepTimes; j++) {
      result += `${String(addition)}`;
      countAddRep++;
      if (addRepTimes === countAddRep) {
        continue;
      } else {
        result += `${String(addSeparator)}`;
      }
    }
    if (repTimes === countRep) {
      continue;
    } else {
      result += `${String(separator)}`;
      countRep++;
    }
    countAddRep = 0;
  }

  return result;
};
