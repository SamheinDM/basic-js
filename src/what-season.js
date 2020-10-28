const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === null || date === undefined) return 'Unable to determine the time of year!';

  var givenDate = new Date(date);
  let month = givenDate.getMonth();

  if (givenDate == 'Invalid Date' || !Object.prototype.toString.call(date).match(['object Date'])) {
    throw new UserException('THROWN');
  }

  if ( month < 2 || month === 11) {
    return 'winter';
  } else if (month < 5) {
    return 'spring';
  } else if (month < 8) {
    return 'summer';
  } else {
    return 'autumn';
  }
};
