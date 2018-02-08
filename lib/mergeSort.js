function mergeSort(array) {
  if (array.length <= 1) {
    return array
  }

  let midIndex = Math.floor(array.length / 2);
  let leftArray = array.slice(0, midIndex);
  let rightArray = array.slice(midIndex);

  return merge(mergeSort(leftArray), mergeSort(rightArray))
}

function merge(leftArray, rightArray) {
  let sortedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      sortedArray.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      sortedArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }
  return sortedArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
}



module.exports = mergeSort;


























