// function makeNegative(num) {
//     if (num <= 0){
//         return num
//     } else 
//     return num * -1
//   };

// function makeNegative(num) {
//     return num <= 0 ? num : num * -1
// }

const makeNegative = num => num <= 0 ? num : num * -1;

module.exports = makeNegative