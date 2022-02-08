/* exported chunk */
function chunk(array, size) {
  const arrayCopy = array;
  let currentChunk = [];
  const finalChunk = [];

  for (let i = 0; i < arrayCopy.length; i++) {
    if (currentChunk.length < size) {
      currentChunk.push(arrayCopy[i]);
    } else if (i === size) {
      finalChunk.push(currentChunk);
      currentChunk = [];
      currentChunk.push(arrayCopy[i]);
    } else if (i % size === 0) {
      finalChunk.push(currentChunk);
      currentChunk = [];
      currentChunk.push(arrayCopy[i]);
    }
  }
  if (currentChunk.length) {
    finalChunk.push(currentChunk);
  }
  return finalChunk;
}
