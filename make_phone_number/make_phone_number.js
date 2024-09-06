const numbers = ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
// Solution 1
// function createPhoneNumber(numbers){
//   numbers.splice(0, 0, '(')
//   numbers.splice(4, 0, ') ')
//   numbers.splice(8, 0, '-')
//     return numbers.join('');
  
// }

// Solution 2 
function createPhoneNumber(numbers){
 return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`

}
console.log(createPhoneNumber(numbers));
