const { uppercase, lowercase, numbers } = require("./letters");

const countShift = (arr, symbol, shift) => {
  const ind = arr.indexOf(symbol);
  return arr[(ind + shift) % arr.length];
};

const encrypt = (symbol, shift) => {
  if (lowercase.indexOf(symbol) >= 0) {
    return countShift(lowercase, symbol, shift);
  } else if (uppercase.indexOf(symbol) >= 0) {
    return countShift(uppercase, symbol, shift);
  } else if (numbers.indexOf(symbol) >= 0) {
    return countShift(numbers, symbol, shift);
  }
};

const decrypt = (symbol, shift) => {
  if (lowercase.indexOf(symbol) >= 0) {
    return countShift(lowercase.reverse(), symbol, shift);
  } else if (uppercase.indexOf(symbol) >= 0) {
    return countShift(uppercase.reverse(), symbol, shift);
  } else if (numbers.indexOf(symbol) >= 0) {
    return countShift(numbers.reverse(), symbol, shift);
  }
};

module.exports = { encrypt, decrypt };
