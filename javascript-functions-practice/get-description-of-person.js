/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var name = person.name;
  var occupation = person.occupation;
  var birthPlace = person.birthPlace;
  var description = name + ' is a ' + occupation + ' from ' + birthPlace + '.';
  return description;
}
