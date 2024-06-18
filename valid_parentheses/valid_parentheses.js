//Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.

//An input string is valid if:

// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.
// 3. Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false


const isValidParentheses = function(s) {

    const stack = [];

    const parenthesesObj = {
        ")"  : "(",
        "]"  : "[",
        "}"  : "{",  
    };

    for (let char of s){
        if (parenthesesObj[char]){
            if (stack.length > 0 && stack[stack.length -1] == parenthesesObj[char]){
                stack.pop()
            } else {
                return false
            }
        } else {
            stack.push(char)
        }
    } 
    return stack.length === 0;   
};

module.exports = isValidParentheses