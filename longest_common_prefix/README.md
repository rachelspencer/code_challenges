
# Longest common prefix

## DESCRIPTION:
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 
## Examples
Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.


## My solution explained

For this challenge, I decided to sort the array of words using the `sort()` method. This allowed the array to be sorted in alphabetical order. I was able to compare the first and last value in this array. I then split these two words into letter strings and used a for loop to check if the same value at the same index is identical. If it is, it will add this letter to the result. The moment the values are not the same, the for loop will break and return what letters have previously been collected.

If there are no values in the input array, then an empty string is returned.


```

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

```