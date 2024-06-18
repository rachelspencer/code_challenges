const longestCommonPrefix = require('./longest_comming_prefix');

describe('longestCommonPrefix', () => {
    test('should return the longest common prefix in array or words', () => {
        expect(longestCommonPrefix([])).toBe("");
        expect(longestCommonPrefix(["flower","flow","flight"])).toBe("fl");
        expect(longestCommonPrefix(["dog","racecar","car"])).toBe("");
        expect(longestCommonPrefix(["climb", "class", "clap",])).toBe("cl");
    });
});