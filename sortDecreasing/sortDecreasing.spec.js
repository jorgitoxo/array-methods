const sortDecreasing = require('./sortDecreasing');
const assert = require('assert')

describe("sortDecreasing", function() {

    it("returns the values in reverse order", function() {
  
        let arr = [5, 2, 1, -10, 8];
  
        // filterRangeInPlace(arr, 2, 5); 
  
        assert.deepEqual(sortDecreasing, [8, 5, 2, 1, -10]);
    });
  
    it.skip("returns the filtered values with reversed input", function() {
  
        let arr = [1, 8, 3, 5];
  
        filterRangeInPlace(arr, 2, 5); 
  
        assert.deepEqual(arr, [3, 5]);
    });

    it.skip("doesn't return anything", function() {
        // isUndefined has been deprecated, use value === undefined instead
        // assert.isUndefined(filterRangeInPlace([1,2,3], 1, 4)); 
        assert(filterRangeInPlace([1,2,3], 1, 4) === undefined); 
    });
  
  });
