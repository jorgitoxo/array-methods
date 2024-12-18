// Changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
const camelize = function (str) {
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

// Do not edit below this line
module.exports = camelize;
