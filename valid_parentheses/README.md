# Valid Parenthesis

## DESCRIPTION:
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

## Examples
Example 1:
Input: `s = "()"`
Output: `true`

Example 2:
Input: `s = "()[]{}"`
Output: `true`

Example 3:
Input: `s = "(]"`
Output: `false`


[Link to Leetcode](https://leetcode.com/problems/valid-parentheses/description/)


## My solution explained
For this solution I created an object to map each closing bracket to its corresponding opening bracket. A `for...of` loop is used to iterate over each character in the string `s`. The variable
`char` represents the current character in each iteration.

The outside `if` statement checks if the current `char` is a closing bracket by looking it up in the `parenthesesObj`. If `char` is a closing bracket, the condition is true.

The inner `if` statement checks if the `stack` arr is not empty and compares that the top element of the `stack` with the expected opening bracket for the current bracket `char`. If they mathc, it means the closing bracket correctly closes the most recent unmatched opening bracket. If this condition is true, the top element of the stack is removed using the `.pop()` method, as it has been matched by the current closing bracket `char`.

If this `if` statement is not true, either the stack is empty or the top of the stack does not match the expected opening bracket, the function returns `false`.

If the `char` is not a closing bracket, it is assumed to be an opening bracket and it is pushed onto the stack to keep track of it as an unmatched opening bracket.

After the loop has processed all characters in the string `s`, `return stack.length === 0;` checks if the stack is empty. If stack.`length === 0` is true, it means all opening brackets have been matched and closed by corresponding closing brackets in the correct order, so the function returns `true`. If the stack is not empty, it means there are unmatched opening brackets, so the function returns `false`.

```

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

```
