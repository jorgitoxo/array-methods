const getAverageAge = function (arr) {
    return arr.reduce((sum, person) => (
        sum + person.age
    ), 0) / arr.length;
}

//  Jest testing
module.exports = getAverageAge;
