const getUniqueMembers = require('./uniqueMembers');
const assert = require('assert');

describe("getUniqueMembers", function() {

    it("returns the non repeating elements", function() {
  
        let strings = ["Hare", "Krishna", "Hare", "Krishna",
            "Krishna", "Krishna", "Hare", "Hare", ":-O"
        ];

        assert.deepEqual(getUniqueMembers(strings), ["Hare", "Krishna", ":-O"]);
    });

    it("does not change the source array", function() {
        let strings = ["Krishna", "Krishna", "Hare", "Hare"];
        
        getUniqueMembers(strings);
        assert.deepEqual(strings, ["Krishna", "Krishna", "Hare", "Hare"]);
      });
});
