// Copy to new array of objects with id and fullName, 
// where fullName is generated from name and surname
const mapToObjects = function(usersArray) {
    let usersMapped = usersArray.map((item, index) => ({
        fullName: `${item.name} ${item.surname}`,
        id: item.id
    }));
    return usersMapped
}

module.exports = mapToObjects;
