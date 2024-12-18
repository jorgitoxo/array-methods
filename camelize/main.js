function sumOfTripledEvens(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      // Step 1: If the element is an even number
      if (array[i] % 2 === 0) {
        // Step 2: Multiply this number by three
        const tripleEvenNumber = array[i] * 3;
  
        // Step 3: Add the new number to the total
        sum += tripleEvenNumber;
      }
    }
    return sum;
  }

function sumOfTripledEvens2(array) {
    // Step 1: FILTER -- If the element is an even number
    // Step 2: MAP -- Multiply this number by three
    // Step 3: REDUCE -- Add the new number to the total
    const evenNumsTripled = array
      .filter((num) => num % 2 === 0)
      .map((num) => num * 3)
      .reduce((total, currentNum) => {
        return total + currentNum;
      }, 0);
    return evenNumsTripled;
}

function sumOfTripledEvens3(array) {
    return array
      .filter((num) => num % 2 === 0)
      .map((num) => num * 3)
      .reduce((total, currentNum) => total + currentNum);
}
 
// Changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
function camelize(str) {
  return str.split("-")
            .map((item, index) =>
                  item ? 
                    (index > 0) ? 
                      item[0].toUpperCase() + item.slice(1)
                      : item
                    : ""
            )
            .join("");
}
