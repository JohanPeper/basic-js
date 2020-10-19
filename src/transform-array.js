// const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (arr.constructor != Array) { throw arr; }
  else {

    let array = [], array1 = [];
    let del = [];
    array = arr.slice();
    array.forEach((item, index) => {
      if (item == '--discard-next') {
        return
      }
      else if (item == '--double-next') {        
          array1.push(array[index + 1]);
      }
      else if (item == '--double-prev') {
        if (array[index - 2] == '--discard-next') {
          return
        }
        else {
          array1.push(array[index - 1]);
        }
      }
      else if (item == '--discard-prev') {
        if (array[index - 2] == '--discard-next') {
          return
        }
        else { del = array1.pop() }
      }
      else {
        if (array[index - 1] != '--discard-next') {
          array1.push(item)
        }
        else { return }
      }
    })
    function dellUndefined(value) {
      return value != undefined;
    }
    array1 = array1.filter(dellUndefined)
    return array1;
  }
};
