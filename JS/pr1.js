function getSumOf3And5Multiples(max) {
  var sum = 0;
  for (var i = 0; i <= max; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

//use for problem
var result = getSumOf3And5Multiples(1000);
console.log(result);
