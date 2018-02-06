const array = [4, 5, 2, 1, 8, 3]

function mergeSort(arrayToSort) {
  if (arrayToSort.length <= 1) {
    return arrayToSort
  }

  let midIndex = Math.floor(arrayToSort.length/2);
  let leftSide = arrayToSort.slice(0, midIndex)
  let rightSide = arrayToSort.slice(midIndex)

  return merge(split(rightSide), split(leftSide))
}

function merge(rightSide, leftSide) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (rightIndex < rightSide.length && leftIndex < leftSide.length) {
    if (rightSide[rightIndex] < leftSide[leftIndex]) {
      result.push(rightSide[rightIndex]);
      rightIndex++;
    } else {
      result.push(leftSide[leftIndex]);
      leftIndex++
    }
  }
  return result.concat(leftSide.slice(leftIndex)).concat(rightSide.slice(rightIndex))
}

module.exports = split;