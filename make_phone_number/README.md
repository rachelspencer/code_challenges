# Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

## Example
- createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

## Notes
The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!

## My Solution explained

The first solution uses splice, but splice mutates the original array and shifts the elements with each insertion. This is more expensive than alternatives that avoid modifying the array in place. 

```

Solution 1
function createPhoneNumber(numbers){
   numbers.splice(0, 0, '(')
   numbers.splice(4, 0, ') ')
   numbers.splice(8, 0, '-')
   return numbers.join('');
  
 };

 ```
 So I considered using template literal to reformat the array. 
 ```

 Solution 2 
function createPhoneNumber(numbers){
    return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`
};

```

