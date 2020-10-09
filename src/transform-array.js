// const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (arr.constructor != Array) { throw arr; }
  else {
    // console.log(arr);
    // arr = arr.flat(); 
    // console.log(arr);
    let array = [];
    let del = [];

    array = arr.slice();

    array.forEach((item, index) => {
      if (item == '--discard-next' || item == "--discard-next") {
        if (index < array.length - 1) {
          if(array[index + 2] == '--discard-next'){del = array.splice(index, 4);}
          else if (array[index + 2] == '--double-prev' || array[index + 2] == '--discard-prev') {
             del = array.splice(index, 3);
          }
          else { del = array.splice(index, 2); return index-=2;  }
        }
        else { return del  = array.splice(index, 1); };
      }
    })

    array.forEach((item, index) => {
      if (item == '--double-next') {
        if (index < array.length - 1) {
          return array[index] = array[index + 1];
        }
        else { return del  = array.splice(index, 1); }
      }
    })

    array.forEach((item, index) => {
      if (item == '--double-prev') {
        if (index > 0) {
          return array[index] = array[index - 1];
        } else { return del = array.splice(index, 1); }
      }
    })

    array.forEach((item, index) => {
      if (item == '--discard-prev' || item == "--discard-prev") {
        if(array[index + 2] == '--discard-prev'){del = array.splice(index, 4);}
        else if (index > 0) {
          del = array.splice(index - 1, 2);
        }
        else { return del = array.splice(index, 1); }
      }
    })
    return array;
  }
};
