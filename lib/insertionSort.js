function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j +1] = array[j];
      j--;
    }
    array[j +1] = temp
  }
  return array
}

// function insertionSort(arrayToSort) {
//   for (let i = 1; i < arrayToSort.length; i++) {
//     let currentValue = arrayToSort[i];
//     let compareIndex = i - 1;
//     while (compareIndex >= 0 && arrayToSort[compareIndex] > currentValue) {
//       arrayToSort[compareIndex + 1] = arrayToSort[compareIndex];
//       compareIndex--;
//     }
//     //insert the thing we're holding onto(temp variable)
//     arrayToSort[compareIndex + 1] = currentValue
//   }
// }

module.exports = insertionSort