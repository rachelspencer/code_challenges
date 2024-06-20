# Merge Two Sorted Lists

## DESCRIPTION:
You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

## Examples
Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2: 
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]

## My solution explained

For this code challenge, I started by handling the conditionals to check if one or both of the arrays were empty. If either array is empty, the function returns the sorted version of the non-empty array or an empty array if both are empty. After that, I combined the current lists into a new variable using the spread operator and sorted them.

I included a callback in the `sort` method to ensure that the integers are sorted in ascending order. The callback function `(a, b) => a - b` compares two numbers, `a` and `b`. If the result of `a - b` is negative, it means `a` is smaller than `b`. If the result is positive, then `b` is bigger than `a`. Without this callback, arrays like `[0, 10, 2, 100]` would be sorted as `[0, 10, 100, 2]` because the default sort method sorts elements as strings.

```

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

```