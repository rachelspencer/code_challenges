// You are given the heads of two sorted linked lists `list1` and `list2`.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.


// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2: 
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

const list1 = [1,3,6,4,8]
const list2 = [5,6,2]

// Solution 1
// const mergeTwoLists = function(list1, list2) {

//     if (list1.length < 1 && list2.length < 1) {
//         return [];

//     } else if  (list1.length < 1) {
//         return [...list2].sort((a, b) => a - b);;

//     } else if (list2.length < 1) {
//         return [...list1].sort((a, b) => a - b);;

//     } else {
//         const mergedArr = [...list2]
//         mergedArr.push(...list1)
       
//         return mergedArr.sort((a, b) => a - b);;
//     }
// };


// Refactor 

const mergeTwoLists = function(list1, list2) {

    if (!list1.length && !list2.length) {
        return [];

    } else if  (!list1.length) {
        return [...list2].sort((a, b) => a - b);;

    } else if (!list2.length) {
        return [...list1].sort((a, b) => a - b);;

    } else {
        const mergedArr = [...list1, ...list2]
        return mergedArr.sort((a,b) => a - b);

    }
};

module.exports = mergeTwoLists