// describe("camelize", function() {

//     it("leaves an empty line as is", function() {
//       assert.equal(camelize(""), "");
//     });
  
//     it("turns background-color into backgroundColor", function() {
//       assert.equal(camelize("background-color"), "backgroundColor");
//     });
  
//     it("turns list-style-image into listStyleImage", function() {
//       assert.equal(camelize("list-style-image"), "listStyleImage");
//     });
  
//     it("turns -webkit-transition into WebkitTransition", function() {
//       assert.equal(camelize("-webkit-transition"), "WebkitTransition");
//     });
  
//   });

const camelize = require('./camelize')

describe('camelize', () => {
  test('leaves an empty line as is', () => {
    expect(camelize('')).toEqual('');
  });
  test('turns background-color into backgroundColor', () => {
    expect(camelize('background-color')).toEqual('backgroundColor');
  });
  test('turns list-style-image into listStyleImage', () => {
    expect(camelize('list-style-image')).toEqual('listStyleImage');
  });
  test('turns -webkit-transition into WebkitTransition', () => {
    expect(camelize('-webkit-transition')).toEqual('WebkitTransition');
  });
});
