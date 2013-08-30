function isPrime(num) {
  for (var i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function getNthPrime(nth) {
  var curr = 0,
      i = 1;
  while (curr < nth) {
    i++;
    if (isPrime(i)) {
      curr++;
    }
  }
  return i;
}

//execute
var result = getNthPrime(10001);
console.log(result);
