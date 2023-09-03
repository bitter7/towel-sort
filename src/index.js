
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }

const combinedArray = [];

for (let i = 0; i < matrix.length; i++) {

  if (i % 2 === 1) {
    combinedArray.push(...matrix[i].reverse());
  } else {
    combinedArray.push(...matrix[i]);
  }
}

return combinedArray;
}