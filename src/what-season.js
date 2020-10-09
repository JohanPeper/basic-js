// const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == null || date === undefined) { return 'Unable to determine the time of year!' }
  else if (typeof date === 'function') { throw [Function]; }
  else if (date.getUTCFullYear() ===undefined) { throw date; }
  else if (date.constructor === Date) {
    let season = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter']
    return season[date.getMonth()]
  }
  else return false
};
