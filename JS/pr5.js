function smallestMultiple1To20() {
  var i = 20;
  while (isDivisibleBy1To20(i) === false) {
    i++;
  }
  return i;
}

function isDivisibleBy1To20(num) {
  for (var i = 1; i <= 20; i++) {
    if (num % i !== 0) {
      return false;
    }
  }
  return true;
}

//use for problem
var result = smallestMultiple1To20();
console.log(result);
