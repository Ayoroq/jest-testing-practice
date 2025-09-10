const { capitalize } = require('./practice');

test('returns the a capitalized word', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('world')).toBe('World');
});
