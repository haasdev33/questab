const calculadora = require("../models/calculadora.js");

test("somar 2+3 = 5", () => {
  expect(calculadora.somar(2, 3)).toBe(5);
});
test("multiplicar 5*100 = 500", () => {
  expect(calculadora.multiplicar(100, 5)).toBe(500);
});
