// DESCRIPTION:
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// Pseudo
// For each item in the array, create a key value pair in an object
// Each iteration of a number, check if that value already exists in the object as a key
// If its undefiened, add the key and set its initial value to 1
// If defined, add 1 to its value
// Find the key whos value is an odd value
// Return that key

const findOddInt = (arr) => {
    const countMap = {} ;

    arr.forEach(num => {
        // countMap[num] = (countMap[num] || 0) + 1;
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
};


module.exports = findOddInt