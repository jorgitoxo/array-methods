// Looks for elements with values higher or equal to a and lower or equal to b in arr
// Returns array containning filtered results
const filterRange = function (arr, num1, num2) {
    return arr.filter((item) => ((item >= num1) && (item <= num2)));
}



// Do not edit below this line
module.exports = filterRange;
