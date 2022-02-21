/* exported getLength */

function getLength(list) {
  let counter = 0;

  while (list.next !== null) {
    list = list.next;
    counter++;
  }

  return counter + 1;
}
