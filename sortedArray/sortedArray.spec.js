const sortedArray = require('./sortedArray');
const assert = require('node:assert');

describe("sortedArray", function() {

    it("returns the user names only", function() {

        let arr = ["HTML", "JavaScript", "CSS"];
        let sorted = sortedArray(arr);

        assert.deepEqual(sorted, ['CSS','HTML','JavaScript']);
        assert.deepEqual(arr, ["HTML", "JavaScript", "CSS"]);
    });
  });
