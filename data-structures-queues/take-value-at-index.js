/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let counter = 0;
  let cycleValue = null;

  if (queue.peek() === undefined) {
    return;
  }

  while (counter !== index) {
    counter++;
    cycleValue = queue.dequeue();
    queue.enqueue(cycleValue);
  }

  return queue.dequeue();
}
