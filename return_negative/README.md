# Return Negative

## DESCRIPTION:
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

## Examples
- makeNegative(1);    // return -1
- makeNegative(-5);   // return -5
- makeNegative(0);    // return 0
- makeNegative(0.12); // return -0.12

## Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

[Link to CodeWars Kata](https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript)

## My solution explained

The first solution utilized an if...else statement. I then refactored this to use a ternary operator inside a function declaration. This was further simplified using ES6 arrow function syntax, which allows you to omit the return statement.

Initial Solution:
```

 function makeNegative(num) {
     if (num <= 0){
         return num
     } else 
     return num * -1
   };

```
Refactor Solution 1:
```


 function makeNegative(num) {
     return num <= 0 ? num : num * -1
 }

 ```

Refactor Solution 2:
 ```

const makeNegative = num => num <= 0 ? num : num * -1;

```