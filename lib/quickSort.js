function quickSort(arrayToSort) {
  if (arrayToSort.length <= 1) {
    return arrayToSort
  }

  let pivot = arrayToSort.pop();
  let greaterThan = [];
  let lessThan = [];

  for (let i = 0; i < arrayToSort.length; i++){
    if (array[i] < pivot) {
      lessThan.push(arrayToSort[i])
    } else {
      greaterThan.push(arrayToSort[i])
    }
  }

  return [...quickSort(lessThan), pivot, ...quickSort(greaterThan)]
};

module.exports = quickSort