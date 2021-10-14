/* eslint-disable no-prototype-builtins */
/* eslint-disable no-undef */
/* eslint-disable no-template-curly-in-string */
/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  for (currentNumber = 0; currentNumber < 11; currentNumber++) {
    numbers.push(currentNumber);
  }
  return numbers;
}

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  for (currentNumber = 0; currentNumber < 21; currentNumber += 2) {
    evenNumbers.push(currentNumber);
  }
  return evenNumbers;
}

function repeatWord(word, times) {
  var repeated = '';
  while (times > 0) {
    repeated += word;
    times--;
  }
  return repeated;
}

function logEachCharacter(string) {
  for (i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

function doubleAll(numbers) {
  var doubled = [];
  for (i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

function getKeys(object) {
  var keys = [];
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      console.log(`${key}: ${object[key]}`);

    }
    keys.push(key);
  }
  return keys;
}

function getValues(object) {
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const value = object[key];
      console.log(value);
    }
  }

}
