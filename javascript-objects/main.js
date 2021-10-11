var student = {
  firstName: 'Nelson',
  lastName: ' Daza',
  age: 23
};

var fullName = student.firstName + student.lastName;
console.log("The student's full name is:", fullName);

student.livesInIrvine = false;

student.previousOccupation = 'Restaurant Server';

console.log('Does he live in Irvine?:', student.livesInIrvine);
console.log('His previous job was:', student.previousOccupation);

var vehicle = {
  make: 'Volkswagen',
  model: 'Jetta',
  year: 2002
};

vehicle['color'] = 'blue';
vehicle['isConvertible'] = false;
console.log('The color of the car is:', vehicle['color']);
console.log('Is the vehicle convertible?', vehicle['isConvertible']);

console.log(vehicle);

var pet = {
  name: 'Betsy',
  type: 'dog'
};

delete pet.name;
delete pet.type;
console.log('The value of pet is:', pet);
