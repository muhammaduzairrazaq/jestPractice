const reverseString = require('./task2');

// Arrange
const s = 'uzair';

// Act
const reslut = reverseString(s);

// Assert
test('reverseString should reverse the string correctly', () => { expect(reslut).toBe('riazu') });