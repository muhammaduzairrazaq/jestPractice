const Capitalize = require('./task4');

// Arrange
const s = 'uzair';

// Act 
const result = Capitalize(s);

// Assert
test('The first character of the string should be capitalize ', () => {expect(result).toBe('Uzair')});
