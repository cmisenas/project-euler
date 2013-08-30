function getSquareOfSum(num) {
  var sum = 0;
  for (var i = 1; i <= num; i++) {
    sum += i;
  }
  return sum * sum;
}

function getSumOfSquares(num) {
  var sum = 0;
  for (var i = 1; i <= num; i++) {
    sum += i * i;
  }
  return sum;
}

//use for problem
var result = Math.abs(getSumOfSquares(100) - getSquareOfSum(100));
console.log(result);
