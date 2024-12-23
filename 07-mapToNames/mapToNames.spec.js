const mapToNames = require('./mapToNames');
const assert = require('node:assert');

describe("mapToNames", function() {

    it("returns the user names only", function() {
  
        let john = { name: "John", age: 25 };
        let pete = { name: "Pete", age: 30 };
        let mary = { name: "Mary", age: 28 };

        let users = [ john, pete, mary ];
        mapToNames(users);

        assert.deepEqual(users, ['John','Pete','Mary' ]);
    });
  });
