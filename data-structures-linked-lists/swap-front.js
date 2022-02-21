/* exported swapFront */
/* global LinkedList */
function swapFront(list) {
  if (list.next === null) {
    return list;
  }
  const first = new LinkedList(list.next.data, list.data);
  first.next.next = list.next.next;

  return first;
}
