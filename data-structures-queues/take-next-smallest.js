/* exported takeNextSmallest */

function takeNextSmallest(queue) {

  let predecessor = null;

  if (queue.peek() === undefined) {
    return;
  }

  while (queue.peek() !== undefined) {
    predecessor = queue.dequeue();

    if (queue.peek() === undefined) {
      return predecessor;
    } else if (predecessor <= queue.peek()) {
      return predecessor;
    }

    queue.enqueue(predecessor);
  }
}
