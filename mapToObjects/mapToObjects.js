const mapToObjects = function(usersArray) {
    let usersMapped = [];
    usersArray.map((item, index) => {
        let fullName = item['name'] + ' ' +item['surname'];
        usersMapped[index] = {fullName: fullName, id: item['id']}
        // console.log(fullName);
    })
    return usersMapped;
}

module.exports = mapToObjects;
