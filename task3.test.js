const Calculator = require('./task3');

// Arrange
const cal = new Calculator()

// Act and Assert
describe('The sum of two numbers', ()=>{
    test('is 3', () => { expect(cal.add(1,2)).toBe(3) });
    test('is 5', ()=>{ expect(cal.add(3,2)).toBe(5)});
    test('is 10', ()=>{expect(cal.add(5,5)).toBe(10)});
});

describe('The difference of two numbers', ()=>{
    test('is 3', () => { expect(cal.subtract(5,2)).toBe(3) });
    test('is 6', ()=>{ expect(cal.subtract(8,2)).toBe(6)});
    test('is 0', ()=>{expect(cal.subtract(5,5)).toBe(0)});
});

describe('The multiplication of two numbers', ()=>{
    test('is 10', () => { expect(cal.multiply(5,2)).toBe(10) });
    test('is 16', ()=>{ expect(cal.multiply(8,2)).toBe(16)});
    test('is 25', ()=>{expect(cal.multiply(5,5)).toBe(25)});
});

describe('The division of two numbers', ()=>{
    test('is 5', () => { expect(cal.divide(10,2)).toBe(5) });
    test('is 4', ()=>{ expect(cal.divide(8,2)).toBe(4)});
    test('is 1', ()=>{expect(cal.divide(5,5)).toBe(1)});
});


