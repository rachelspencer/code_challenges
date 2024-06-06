function makeNegative(num) {
    if (num <= 0){
        return num
    } else 
    return num * -1
  };

console.log(makeNegative(0));

module.exports = makeNegative