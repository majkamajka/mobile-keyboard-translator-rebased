var translateNumber = require('./app.js');

test(`translate "1-800-FLOWER" to "1-800-3569377"`, () => {
  expect(translateNumber("1-800-FLOWER").toBe("1-800-3569377"))
})


console.log(translateNumber("123"));
