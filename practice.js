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

module.exports = { capitalize, reverseString, Calculator, cipherText };
