# Return Negative

## DESCRIPTION:
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.
 
## Examples
Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

## My solution explained

First Solution

My first solution trimmed the white space off the end of the string and then coverted the string into an array. The I accessed the last word in the array and returned its length.


```

const s = "   fly me   to   the moon  "

const lengthOfLastWord = function(s) {
    const arrSentence = s.trim().split(' ');
   
    return arrSentence[arrSentence.length -1].length
    
};

```

Second Solution

Your revised explanation is clearer and provides a good overview of how the function works. Here are a few suggestions for further improvement to enhance clarity and readability:

I improved the time complexity of this function by avoiding the unnecessary step of splitting the entire string into an array. Instead, I implemented a backward traversal approach.

First, I initialize two variables: `length` to count the characters of the last word, and `end` set to the last index of the string.

The initial while loop identifies and skips trailing spaces. It continues iterating as long as `end` is a valid index and `s[end]` is a space. If these conditions hold true, `end` is decremented by 1, effectively moving the pointer one position to the left.

To count the length of the last word, the second while loop increments `length` while `end` remains a valid index and `s[end]` is not a space. In each iteration, `end` is decremented by 1 to continue moving the pointer leftward. This loop continues until `end` points to a space or goes out of bounds (e.g., -1).


```

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

```