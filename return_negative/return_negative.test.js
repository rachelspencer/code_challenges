const makeNegative = require('./return_negative.js')

describe('makeNegative', () => {
    test('should return a positive integer negative, return 0', () => {
        // expect(makeNegative([0])).toBe(0);
        expect(makeNegative(-1)).toBe(-1);
        expect(makeNegative(3)).toBe(-3);
        expect(makeNegative(0)).toBe(0);
    });
});