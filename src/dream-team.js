// const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members == null || members.constructor !== Array) { return false }
  else {
    members = members.map((a) => { if (typeof a == 'string') {return a }else{ return a = '';}});
    return members.reduce((a, b) => { a += b.toUpperCase().trim().slice(0, 1); return a.split('').sort().join('') }, '')
  }
};
