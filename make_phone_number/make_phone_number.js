const phoneNumber = ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
// Solution 1
// function createPhoneNumber(numbers){
//   phoneNumber.splice(0, 0, '(')
//   phoneNumber.splice(4, 0, ') ')
//   phoneNumber.splice(8, 0, '-')
//     return phoneNumber.join('');
  
// }

// Solution 2 
function createPhoneNumber(numbers){
 return `(${phoneNumber.slice(0,3).join('')}) ${phoneNumber.slice(3, 6).join('')}-${phoneNumber.slice(6).join('')}`

}
console.log(createPhoneNumber(phoneNumber));

