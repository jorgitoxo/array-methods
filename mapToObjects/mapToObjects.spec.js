const mapToObjects = require('./mapToObjects');
const assert = require('node:assert');

describe("mapToObjects", function() {

    it("returns the correct id", function() {
  
        let john = { name: "John", surname: "Smith", id: 1 };
        let pete = { name: "Pete", surname: "Hunt", id: 2 };
        let mary = { name: "Mary", surname: "Key", id: 3 };

        let users = [ john, pete, mary ];
        
        let usersMapped = mapToObjects(users);

        assert.deepEqual(usersMapped[0].id, 1);
    });

    it("returns the correct full name", function() {
  
        let john = { name: "John", surname: "Smith", id: 1 };
        let pete = { name: "Pete", surname: "Hunt", id: 2 };
        let mary = { name: "Mary", surname: "Key", id: 3 };

        let users = [ john, pete, mary ];
        
        let usersMapped = mapToObjects(users);

        assert.deepEqual(usersMapped[0].fullName, 'John Smith');
    });
  });
