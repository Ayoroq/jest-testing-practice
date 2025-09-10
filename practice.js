function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }
}

function cipherText(string, shift) {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (lowerCase.includes(char)) {
      let index = lowerCase.indexOf(char);
      let newIndex = (index + shift) % 26;
      result += lowerCase[newIndex];
    } else if (upperCase.includes(char)) {
      let index = upperCase.indexOf(char);
      let newIndex = (index + shift) % 26;
      result += upperCase[newIndex];
    } else {
      result += char;
    }
  }
  return result;
}

function analyzeArray(array) {
    let sum = array.reduce((acc, curr) => acc + curr, 0);
    let average = sum / array.length;
    let min = Math.min(...array);
    let max = Math.max(...array);
    let length = array.length;
    return { average, min, max, length };
}

module.exports = { capitalize, reverseString, Calculator, cipherText, analyzeArray };
