const sortByAge = function (arr) {
    arr.sort((a, b) => a.age - b.age);
}

module.exports = sortByAge;
