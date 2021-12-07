const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const divisibleByTwo = numbers.filter(number => number % 2 === 0);
console.log(divisibleByTwo);

const greaterThanFive = numbers.filter(number => number > 5);
console.log(greaterThanFive);

// eslint-disable-next-line array-callback-return
const startsWithE = names.filter(name => {
  for (var i = 0; i < names.length; i++) {
    if (name.startsWith('E')) {
      return name;
    }
  }
});
console.log(startsWithE);

// eslint-disable-next-line array-callback-return
const haveD = names.filter(name => {
  for (var i = 0; i < names.length; i++) {
    if (name.includes('d') || name.includes('D') === true) {
      return name;
    }
  }
});

console.log(haveD);
