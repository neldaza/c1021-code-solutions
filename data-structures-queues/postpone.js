/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  return queue.enqueue(queue.dequeue());
}
