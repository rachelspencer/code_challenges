const isValidParentheses = require('./valid_parentheses');

describe('isValidParentheses', () => {
    test('should return true is all parenthesis close', () => {
        expect(isValidParentheses("()")).toBe(true);
        expect(isValidParentheses("()[]{}")).toBe(true);
        expect(isValidParentheses("(]")).toBe(false);
    });
});
