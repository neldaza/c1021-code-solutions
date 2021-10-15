/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable no-unused-vars */
/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  var even = (number % 2);
  if (even === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH > 14 || pH < 0) {
    return ('invalid pH level');
  } else if (pH > 7 && pH <= 14) {
    return ('base');
  } else if (pH < 7 && pH >= 0) {
    return ('acid');
  } else if (pH === 7) {
    return ('neutral');
  }
}

function introduceWarnerBro(name) {
  if (name === 'yakko') {
    return ("We're the warner brothers!");
  } else if (name === 'wakko') {
    return ("We're the warner brothers!");
  } else if (name === 'dot') {
    return ("I'm cute~");
  } else {
    return ('Goodnight everybody!');
  }
}
