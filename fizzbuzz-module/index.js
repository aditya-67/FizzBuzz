"use strict";

var modulo = function (factor, number) {
  return number % factor === 0;
};

var mappings = [
  { factor: 3, word: "Fizz" },
  { factor: 5, word: "Buzz" },
];

var fizzbuzz = function (number) {
  var words = mappings
    .filter(function (m) {
      return modulo(m.factor, number);
    })
    .map(function (m) {
      return m.word;
    });

  if (words.length > 0) {
    return words.join("");
  } else {
    return number.toString();
  }
};

module.exports = fizzbuzz;
