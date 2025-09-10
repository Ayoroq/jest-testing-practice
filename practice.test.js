const { capitalize, reverseString, Calculator } = require("./practice");

test("returns the a capitalized word", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("world")).toBe("World");
});

test("returns the a reversed word", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("world")).toBe("dlrow");
});

test("return the calculated value", () => {
  const calculator = new Calculator();
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(5, 3)).toBe(2);
  expect(calculator.multiply(2, 3)).toBe(6);
  expect(calculator.divide(6, 2)).toBe(3);
});
