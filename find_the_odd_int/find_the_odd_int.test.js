const findOddInt = require('./find_the_odd_int.js');

describe('findOddInt', () => {
    test('should return the integer that appears an odd number of times', () => {
        expect(findOddInt([7])).toBe(7);
        expect(findOddInt([0])).toBe(0);
        expect(findOddInt([1, 1, 2])).toBe(2);
        expect(findOddInt([0, 1, 0, 1, 0])).toBe(0);
        expect(findOddInt([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])).toBe(4);
    });
});
