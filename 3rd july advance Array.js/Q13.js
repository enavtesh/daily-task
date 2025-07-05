// How would you chunk an array into groups of N elements?
// Example: [1,2,3,4,5,6], N = 2 → [[1,2], [3,4], [5,6]]

function chunkArray(arr, size) {
  const result = [];
  for(let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
