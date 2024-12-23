const getAverageAge = require('./averageAge');
const assert = require('assert');

describe("getAverageAge", function() {

    it("returns the average age", function() {
  
        let john = { name: "John", age: 25 };
        let pete = { name: "Pete", age: 30 };
        let mary = { name: "Mary", age: 29 };

        let arr = [ pete, john, mary ];

        assert.equal(getAverageAge(arr), 28);
    });
});
