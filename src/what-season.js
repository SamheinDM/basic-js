const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === null || date === undefined) return 'Unable to determine the time of year!';

  try{
    var givenDate = new Date(date);
  } catch (e) {
    if (e instanceof RangeError) {
      throw new UserException('THROW');
    }

  }
  


  let month = givenDate.getMonth();

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
