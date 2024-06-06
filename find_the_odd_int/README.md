# Find the odd integer

## DESCRIPTION:
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

## Examples
- [7] should return 7, because it occurs 1 time (which is odd).
- [0] should return 0, because it occurs 1 time (which is odd).
- [1,1,2] should return 2, because it occurs 1 time (which is odd).
- [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
- [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

[Link to CodeWars Kata](https://www.codewars.com/kata/54da5a58ea159efa38000836)


## My solution explained
I decided to put the array of numbers into an object. This way, I could tally up each time a number is present in the array. Once all numbers were tallied up, I could then check the values and find the number with the odd amount of occurrences.

By using object notation, I was able to check if a key existed in the object. If a key did not exist, undefined would be returned, which is falsy. If this was the case, I could then set a key to be that number and initialize its value to be 1. If the number did exist as a key in the object already, then the value of that key would increment by 1.

Once the array was organized in an object, I could then use a for...in loop to iterate over the object. I used the % operator to determine if a key's value is odd. When it was, I would then parse this number through the parseInt() method and return it. The reason for using parseInt() is because integers are stored as strings in objects, and the result needed to be returned as an integer.

// Pseudo
// For each item in the array, create a key-value pair in an object
// Each iteration of a number, check if that value already exists in the object as a key
// If its undefiened, add the key and set its initial value to 1
// If defined, add 1 to its value
// Find the key whos value is an odd value
// Return that key

`const findOddInt = (arr) => {
    const countMap = {} ;
    arr.forEach(num => {
        if (countMap[num]) {
            countMap[num] = countMap[num] + 1;
        } else {
            countMap[num] = 1;
        }
    });

    for (const num in countMap) {
        if (countMap[num] % 2 === 1) {
            return parseInt(num); 
        }
    }
};`

Refactor:
In this refactor I used the logical OR operator (||). In JavaScript, the || operator returns the first truthy value it encounters or the last value if none are truthy. Therefore, if countMap[num] is undefined (which is falsy), it returns 0 because undefined is falsy. If countMap[num] already has a value (e.g., 1, 2, etc.), it returns that value because it is truthy.

So, if countMap[num] is undefined, it will use 0. Essentially, it's saying, "If countMap[num] is not set, use 0, then add 1."

But if countMap[num] was is defined, for example, 2, it becomes 2 + 1.

`const findOddInt = (arr) => {
    const countMap = {} ;
    arr.forEach(num => {
        countMap[num] = (countMap[num] || 0) + 1;
    });

    for (const num in countMap) {
        if (countMap[num] % 2 === 1) {
            return parseInt(num); 
        }
    }
};`

