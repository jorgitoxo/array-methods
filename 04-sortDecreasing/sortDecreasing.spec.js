const sortDecreasing = require('./sortDecreasing');
const assert = require('assert')

describe("sortDecreasing", function() {
    
    it("returns the values in reverse order", function() {
        let arr = [5, 2, 1, -10, 8];
        assert.deepEqual(sortDecreasing, [8, 5, 2, 1, -10]);
    });
  });
