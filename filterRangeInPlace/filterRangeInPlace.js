// Removes from array all values except those that are between a and b
const filterRangeInPlace = function (arr, num1, num2) {
    arr.reduceRight((_, item, index) => {
        if ((item < num1) || (item > num2))
            arr.splice(index, 1)
    }, null);
    // initial value (null) is supplied to reduceRight,
    // otherwise the last element in the array will be taken as initial value and skipped
}

// Do not edit below this line
module.exports = filterRangeInPlace;
