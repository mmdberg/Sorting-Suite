const { assert } = require('chai');
const insertionSort = require('../lib/insertionSort.js');

describe('Insertion Sort', function() {
  function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min
  };

  it('should sort a small array', function() {
    var myArray = [4, 5, 3, 2, 1];

    assert.deepEqual(insertionSort(myArray), [1, 2, 3, 4, 5])
  });

  it('should sort letters', function() {
    var myArray = ['d', 'e', 'c', 'b', 'a'];

    assert.deepEqual(insertionSort(myArray), ['a', 'b', 'c', 'd', 'e'])
  });

  it('should sort positive and negative numbers', function() {
    var myArray = [5, 3, -1, -3, 1];

    assert.deepEqual(insertionSort(myArray), [-3, -1, 1, 3, 5])
  });

  it('should sort random arrays', function() {
    var myArray = [];    
    
    for (var i = 0; i < randomNumber(0, 100); i++) {
      myArray.push(randomNumber(0, 100))
    }

    insertionSort(myArray);

    assert.isAtLeast(myArray[1], myArray[0])
  });

  it('should sort large arrays', function() {
    var myArray = [];    
    
    for (var i = 0; i < 20000; i++) {
      myArray.push(randomNumber(0, 100))
    }

    insertionSort(myArray);

    assert.isAtLeast(myArray[1], myArray[0])
  });

});