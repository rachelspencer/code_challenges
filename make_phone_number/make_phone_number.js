const phoneNumber = ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

function createPhoneNumber(numbers){
  phoneNumber.splice(0, 0, '(')
  phoneNumber.splice(4, 0, ') ')
  phoneNumber.splice(8, 0, '-')
  return phoneNumber.join('');
  
}

console.log(createPhoneNumber(phoneNumber));

