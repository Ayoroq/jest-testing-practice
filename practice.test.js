const { capitalize,reverseString } = require('./practice');

test('returns the a capitalized word', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('world')).toBe('World');
});

test('returns the a reversed word', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('world')).toBe('dlrow');
});