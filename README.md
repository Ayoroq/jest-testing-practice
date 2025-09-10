# Jest Testing Practice

A collection of JavaScript functions with comprehensive Jest tests to practice Test-Driven Development (TDD).

This project is part of [The Odin Project](https://www.theodinproject.com/) curriculum for learning JavaScript testing fundamentals.

## Functions

### `capitalize(string)`
Capitalizes the first letter of a string.
```javascript
capitalize("hello") // "Hello"
```

### `reverseString(string)`
Reverses a string.
```javascript
reverseString("hello") // "olleh"
```

### `Calculator`
A class with basic arithmetic operations.
```javascript
const calc = new Calculator();
calc.add(2, 3)      // 5
calc.subtract(5, 2) // 3
calc.multiply(3, 4) // 12
calc.divide(10, 2)  // 5
```

### `cipherText(string, shift)`
Caesar cipher implementation that shifts letters by a given amount.
```javascript
cipherText("hello", 1)        // "ifmmp"
cipherText("Hello World!", 5) // "Mjqqt Btwqi!"
```

### `analyzeArray(array)`
Returns statistics for an array of numbers.
```javascript
analyzeArray([1, 8, 3, 4, 2, 6])
// { average: 4, min: 1, max: 8, length: 6 }
```

## Running Tests

```bash
npm test
```

## Installation

```bash
npm install
```