const mapToNames = function (users) {
    const names = [];
    users.map((item, index) => {
        names[index] = item.name;
    });
    return names;
    
    // explore solution below
    // modify users array and return modififed
    // return users.map((item, index, users) => {
    //     users[index] = item.name;
    //     // console.log(item.name); 
    // });
}

// Do not edit below this line
module.exports = mapToNames;
