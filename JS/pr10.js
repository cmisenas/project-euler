function isPrime(num) {
  for (var i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function getAllPrimesBelowN(num) {
  var primes = [];
  for (var i = 2; i < num; i++) {
    if (isPrime(i) === true) {
      primes.push(i);
    }
  }
  return primes;
}

function sumNumArr(numArr) {
  var sum = 0;
  for (var i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }
  return sum;
}

//execute
var result = sumNumArr(getAllPrimesBelowN(2000000));
console.log(result);
