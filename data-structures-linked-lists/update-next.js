/* eslint-disable no-undef */
/* exported updateNext */

function updateNext(list, value) {
  if (list.next === null) {
    return list;
  }
  const newNext = new LinkedList(value);
  list.next.data = newNext.data;

}
