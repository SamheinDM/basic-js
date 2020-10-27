const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let arr = members;
  let answer = '';

  if (arr === null || arr === undefined) return false;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'string') continue;
    let temp = arr[i].trim();
    answer += temp.slice(0, 1);
  }

  answer = answer.toUpperCase().split('').sort().join('');
  return answer;
};