const { assert } = require('chai');
const quickSort = require('../lib/quickSort.js');

describe('Quick Sort', function() {
  function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min
  };

  it('should sort a small array', function() {
    var myArray = [4, 5, 3, 2, 1];

    assert.deepEqual(quickSort(myArray), [1, 2, 3, 4, 5])
  });

  it('should sort letters', function() {
    var myArray = ['d', 'e', 'c', 'b', 'a'];

    assert.deepEqual(quickSort(myArray), ['a', 'b', 'c', 'd', 'e'])
  });

  it('should sort positive and negative numbers', function() {
    var myArray = [5, 3, -1, -3, 1];

    assert.deepEqual(quickSort(myArray), [-3, -1, 1, 3, 5])
  });

  it('should sort random arrays', function() {

    var myArray = [];    
    
    for (var i = 0; i < randomNumber(0, 100); i++) {
      myArray.push(randomNumber(0, 100))
    }

    var newArray = quickSort(myArray);
  

    assert.isAtLeast(newArray[1], newArray[0])
  });

  it('should sort large arrays', function() {
    var myArray = [];    
    
    for (var i = 0; i < 100000; i++) {
      myArray.push(randomNumber(0, 100))
    }

    var newArray = quickSort(myArray);

    assert.isAtLeast(newArray[2], newArray[1])
  });

});