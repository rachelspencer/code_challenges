const lengthOfLastWord = require('./lengthOfLastWord')

describe('lengthOfLastWord', () => {
    test('should return the length of the last word in the string', () => {
        // expect(makeNegative([0])).toBe(0);
        expect(lengthOfLastWord("Hello World")).toBe(5);
        expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4);
        expect(lengthOfLastWord("luffy is still joyboy")).toBe(6);
    });
})
