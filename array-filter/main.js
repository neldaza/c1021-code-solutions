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
const startsWithE = names.filter(name => name.toLowerCase().startsWith('e'));
console.log(startsWithE);

// eslint-disable-next-line array-callback-return
const haveD = names.filter(name => name.toLowerCase().includes('d'));
console.log(haveD);
