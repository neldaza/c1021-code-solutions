/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* exported getStudentNames */
function getStudentNames(students) {
  var array = [];
  for (i = 0; i < students.length; i++) {
    array.push(students[i].name);
  }

  return array;
}
