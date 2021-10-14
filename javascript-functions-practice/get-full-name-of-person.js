/* exported getFullNameOfPerson */
function getFullNameOfPerson(person) {
  var lastName = person.lastName;
  var firstName = person.firstName;
  var fullName = firstName + ' ' + lastName;
  return fullName;
}
