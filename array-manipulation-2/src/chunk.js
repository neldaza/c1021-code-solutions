/* exported chunk */
function chunk(array, size) {
  let currentChunk = [];
  const finalChunk = [];

  for (let i = 0; i < array.length; i++) {
    if (currentChunk.length < size) {
      currentChunk.push(array[i]);
    } else if (i === size || i % size === 0) {
      finalChunk.push(currentChunk);
      currentChunk = [];
      currentChunk.push(array[i]);
    }
  }
  if (currentChunk.length) {
    finalChunk.push(currentChunk);
  }
  return finalChunk;
}
