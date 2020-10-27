const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let reg = /0-9/g;

  if (!reg.test(sampleActivity)) return false;
  if (typeof sampleActivity !== 'string') return false;
  if (sampleActivity > 15 || sampleActivity < 0 || sampleActivity == 0) return false;

  let k = 0.693 / HALF_LIFE_PERIOD;
  let delta = MODERN_ACTIVITY / sampleActivity;

  let answer = Math.ceil(Math.log(delta) / k);

  return answer;
};
