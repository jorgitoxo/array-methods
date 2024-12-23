const filterRangeInPlace = require('./filterRangeInPlace');
// const assert = require('assert');
const assert = require('node:assert');


describe("filterRangeInPlace", function() {

    it("returns the filtered values", function() {
  
        let arr = [5, 3, 8, 1];
  
        filterRangeInPlace(arr, 2, 5); 
  
        assert.deepEqual(arr, [5, 3]);
    });
  
    it("returns the filtered values with reversed input", function() {
  
        let arr = [1, 8, 3, 5];
  
        filterRangeInPlace(arr, 2, 5); 
  
        assert.deepEqual(arr, [3, 5]);
    });

    it("doesn't return anything", function() {
        // isUndefined has been deprecated, use value === undefined instead
        // assert.isUndefined(filterRangeInPlace([1,2,3], 1, 4)); 
        assert(filterRangeInPlace([1,2,3], 1, 4) === undefined); 
    });
  
  });
