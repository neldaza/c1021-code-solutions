/* exported take2nd */

function take2nd(queue) {
  let counter = 0;
  let firstValue = null;
  let secondValue = null;

  while (counter !== 2) {
    if (counter === 0) {
      firstValue = queue.dequeue();
      counter++;
    } else if (counter === 1) {
      secondValue = queue.dequeue();
      counter++;
    }
  }

  if (firstValue !== undefined) {
    queue.enqueue(firstValue);
  }

  if (secondValue === undefined) {
    return firstValue;
  }

  return secondValue;
}
