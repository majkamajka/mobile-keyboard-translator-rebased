var translateNumber = require('./app.js');

test(`translate "1-800-FLOWERS" to "1-800-3569377"`, () => {
  expect(translateNumber("1-800-FLOWERS")).toBe("1-800-3569377")
})


//console.log(translateNumber("123"));
