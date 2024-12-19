const mapToNames = function (users) {
    users.map((item, index) => users.splice(index, 1, item.name));
}

// Console Debug
// mapToNames(users);

// Jest unit test
module.exports = mapToNames;
