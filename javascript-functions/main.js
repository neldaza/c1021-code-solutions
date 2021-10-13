/* eslint-disable no-unused-vars */
function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

function getArea(width, height) {
  var area = width * height;
  return area;
}

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

function getLastElement(array) {
  var lastElement = array.length - 1;
  var indexLastElement = array[lastElement];
  return indexLastElement;
}
