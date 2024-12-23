const getUniqueMembers = function (arr) {
    let uniqueMembers = [];

    arr.forEach(name => {
        if (!uniqueMembers.includes(name)) {
            uniqueMembers.push(name);
        }
    });

    return uniqueMembers;
}

//  Jest testing
module.exports = getUniqueMembers;
