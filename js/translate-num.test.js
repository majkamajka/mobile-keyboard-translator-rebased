const translateNumber = require('./app.js');

test(`translate tel number with letters to numbers only`, () => {
  expect(translateNumber("1-800-FLOWERS")).toBe("1-800-3569377"),
  expect(translateNumber("1-800-800")).toBe("1-800-800"),
  expect(translateNumber("")).toBe(""),
  expect(translateNumber("5 fAt cAts")).toBe("5 328 2287")

})
