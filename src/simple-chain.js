// const CustomError = require("../extensions/custom-error");

Object.prototype.getLength = function () {
  return chainMaker.chain.length;
}

Object.prototype.removeLink = function (position) {
  if (position % 1 == 0) {
    chainMaker.trash = chainMaker.chain.splice(position - 1, 1);
    chainMaker.trash  = [];
    return chainMaker;
  }
  else return thrown;
}

Object.prototype.addLink = function (value) {
  if (value == null) { chainMaker.chain.push(`( null )`); return chainMaker }
  else if (value == undefined) { chainMaker.chain.push(`()`); return chainMaker }
  else if (value != value) { chainMaker.chain.push(`( NaN )`); return chainMaker }
  else { chainMaker.chain.push(`( ${value.toString()} )`); return chainMaker }
}

Object.prototype.reverseChain = function () {
  chainMaker.chain = chainMaker.chain.reverse();
  return chainMaker;
}

Object.prototype.finishChain = function () {
  return chainMaker.chain.splice(0, chainMaker.chain.length).join('~~');
}

const chainMaker = {
  chain: [],
  trash: [],
};

module.exports = chainMaker;
