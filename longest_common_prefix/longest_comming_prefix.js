// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

//Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

const longestCommonPrefix = function(strs) {
    
    strs.sort();

    const result = [];

    if (strs.length > 0){
        const firstWord = strs[0].split('');
        const lastWord = strs[strs.length -1].split('');

        for (let i=0; i < firstWord.length; i++){
            if (firstWord[i] !== lastWord[i]){
                break
            } else {
                result.push(firstWord[i])
            }
        }
        return result.join('');
    }
    return "";
};

module.exports = longestCommonPrefix