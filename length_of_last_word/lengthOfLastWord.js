// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:
// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.


// First solution
// const s = "   fly me   to   the moon  "

// const lengthOfLastWord = function(s) {
//     const arrSentence = s.trim().split(' ');
   
//     return arrSentence[arrSentence.length -1].length
    
// };

const s = "   fly me   to   the moon  "

const lengthOfLastWord = function(s) {
    let length = 0;
    let end = s.length -1;

    while (end >= 0 && s[end] === " ") {
        end --;
    }

    while (end >= 0 && s[end] !== " ") {
        length++;
        end--;
    }

    return length;
};

console.log(lengthOfLastWord(s));

module.exports = lengthOfLastWord