/* exported removeNext */

function removeNext(list) {
  if (list.next === null) {
    return;
  }
  const valuesAfterSecond = list.next.next;
  list.next = valuesAfterSecond;
}
