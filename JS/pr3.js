function isPrime(num) {
  for (var i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function getAllFactors(num) {
  var factors = [];
  for (var i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

//execute
var allFactors = getAllFactors(600851475143),
    result = 0;
for (var i = 0; i < allFactors.length; i++) {
  if (isPrime(allFactors[i]) === true && allFactors[i] > result) {
    result = allFactors[i];
  }
}
console.log(result);
