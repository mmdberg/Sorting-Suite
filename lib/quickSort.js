function quickSort(array) {
  if (array.length <= 1) {
    return array
  }

  let pivot = array.pop();
  let lessThan = [];
  let greaterThan = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      lessThan.push(array[i])
    } else {
      greaterThan.push(array[i])
    }
  }
  return [...quickSort(lessThan), pivot, ...quickSort(greaterThan)]
}

module.exports = quickSort






























// function quickSort(arrayToSort) {
//   if (arrayToSort.length <= 1) {
//     return arrayToSort
//   }

//   let pivot = arrayToSort.pop();
//   let greaterThan = [];
//   let lessThan = [];

//   for (let i = 0; i < arrayToSort.length; i++){
//     if (arrayToSort[i] < pivot) {
//       lessThan.push(arrayToSort[i])
//     } else {
//       greaterThan.push(arrayToSort[i])
//     }
//   }

//   return [...quickSort(lessThan), pivot, ...quickSort(greaterThan)]
// };