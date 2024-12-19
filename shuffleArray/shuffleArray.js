// Shuffle array order
// Fisher–Yates (aka Knuth) Shuffle.
const shuffleArray = function (arr) {
    arr.map((num, index) => {
        let randomIndex = Math.floor(Math.random() * index);

        [arr[index], arr[randomIndex]] = [
        arr[randomIndex], arr[index]];
    })
}

// module.exports = shuffleArray;

// Debug console testing
let arr = [1, 2, 3];
console.log(arr);

shuffleArray(arr);
console.log(arr);
