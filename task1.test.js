const stringLength = require('./task1');

// Arrange
const s = 'uzair';
const s2 = '';
const s3 = 'muhammad uzair razzaq';

// Act
const result = stringLength(s);
const result2 = () => stringLength(s2);
const result3 = () => stringLength(s3);

// Assert
test('stringLength should return correct length of characters.', () => {
  expect(result).toBe(5);
});

test('stringLength should throw an error for empty string.', () => {
  expect(result2).toThrow('String length should be atleast 1!');
});

test('stringLength should throw an error for string greater than 10 characters.', () => {
  expect(result3).toThrow('String length should not be greater than 10!');
});
