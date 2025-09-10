const { capitalize, reverseString, Calculator, cipherText, analyzeArray } = require("./practice");

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

test("return the ciphered text", () => {
  expect(cipherText("abc", 3)).toBe("def");
  expect(cipherText("xyz", 3)).toBe("abc");
  expect(cipherText("Hello World!", 5)).toBe("Mjqqt Btwqi!");
  expect(cipherText("hello", 1)).toBe("ifmmp");
  expect(cipherText("world", 1)).toBe("xpsme");
  expect(cipherText("ABC", 1)).toBe("BCD");
  expect(cipherText("z", 1)).toBe("a");
  expect(cipherText("Z", 1)).toBe("A");
  expect(cipherText("123!@#", 5)).toBe("123!@#");
});

test("return the analyzed array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
  expect(analyzeArray([1, 2, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
  expect(analyzeArray([10, 20, 30])).toEqual({
    average: 20,
    min: 10,
    max: 30,
    length: 3,
  });
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
  expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual({
    average: 5.5,
    min: 1,
    max: 10,
    length: 10,
  });
});