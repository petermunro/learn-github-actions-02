const { add, divide, premiumMultiply } = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('adds 5 + 7 to equal 12', () => {
    expect(add(5, 7)).toBe(12);
});


test('divides 10 / 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
});

test('throws on division by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero');
});


test('premium multiply works on correct configuration', () => {
    expect(premiumMultiply(4, 5)).toBe(20);
});

