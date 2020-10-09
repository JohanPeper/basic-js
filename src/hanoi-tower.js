// const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let HanoiAnswer = { turns: 0, seconds: 0 };
  HanoiAnswer.turns = +(2 ** disksNumber - 1);
  HanoiAnswer.seconds = Math.floor(HanoiAnswer.turns / (turnsSpeed / (60 * 60)));
  return HanoiAnswer;
};
