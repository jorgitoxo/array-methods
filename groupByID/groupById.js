// Creates an object from arr, with id as the key, and array items as values.
const groupById = function(arr) {
    let group = {};

    arr.reduce((_, user) =>
        group[user.id] = user
    , {});

    return group;
}

// Jest
module.exports = groupById;
