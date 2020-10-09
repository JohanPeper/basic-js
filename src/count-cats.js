// const CustomError = require("../extensions/custom-error");
module.exports = function countCats(matrix) {
  let a = 0;
  matrix.map(
    (item1) => {
      item1.map(
        (item2) => {
          if (item2 == '^^') {
            a += 1;
          }
        }
      )
    }
  )
  return a;
};
