// Creates an object from arr, with id as the key, and array items as values.
const groupById = function(arr) {
    return arr.reduce((_, user) => {
        _[user.id] = user;
        return _;
    }, {});
}

// Jest
module.exports = groupById;
