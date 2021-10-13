var one = 1;
var two = 2;
var three = 3;

var maximumValue = Math.max(one, two, three);
console.log(maximumValue);

var heroes = ['Omni-Man', 'The Punisher', 'Daredevil', 'Iron Man'];

var randomNumber = Math.random();

randomNumber += Math.random() * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('A random index is:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('A random hero is:', randomHero);

var library = [
  { title: 'The Lorax', author: 'Dr. Suess' },
  { title: 'The Cat in The Hat', author: 'Dr.Suess' },
  { title: 'Green Eggs and Ham', author: 'Dr.Suess' }
];

var lastBook = library.pop();
console.log('The last book was:', lastBook);

var firstBook = library.shift();

console.log('The first book was:', firstBook);

var js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log("The library's value is:", library);

var fullName = 'Nelson David Daza';
var firstAndLastName = fullName.split(' ');
console.log('My full name split into an array is:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('My first name in uppercase is:', sayMyName);
