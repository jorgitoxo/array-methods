const sortByAge = require('./sortByAge');
const assert = require('node:assert');

describe("sortByAge", function() {

    it("returns the correct id", function() {
  
        let john = { name: "John", age: 25 };
        let pete = { name: "Pete", age: 30 };
        let mary = { name: "Mary", age: 28 };

        let arr = [ pete, john, mary ];
        sortByAge(arr);

        assert.deepEqual(arr[0].name, 'John');
        assert.deepEqual(arr[1].name, 'Mary');
        assert.deepEqual(arr[2].name, 'Pete');
        
    });
  });
