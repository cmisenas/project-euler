/*
 * We know the following:
 * a and b have to be prime also
 * for f(n) where n = 0 to be prime
 * We also know that a will always have to be equal to b - 2
 * by research.
 */
function main() {
  var allPrimes = getAllPrimes(),
      n = 0, a = 0, b = 0;

  for (var i = allPrimes.length - 1; i >= 0; i--) {
    for (var j = i - 1; j >= 0; j--) {
      evaluation = getQuadraticEvaluation(allPrimes[j], allPrimes[i]);
      if (n < evaluation.n) {
        n = evaluation.n;
        a = evaluation.a;
        b = evaluation.b;
      }
    }
  }

  result = a * b;

  console.log(n);
  console.log(a);
  console.log(b);
  console.log(result);
  return result;
}

function getAllPrimes() {
  var allPrimes = [],
      divisors;
  for (var i = 2; i < 1000; i++) {
    divisors = getDivisors(i);
    if (divisors.length === 0) { allPrimes.push(i); }
  }
  return allPrimes;
}

function getDivisors(n) {
  var allDivisors = [];
  for (var i = 2; i <= n/2; i++) {
    if (n % i === 0 ) { allDivisors.push(i); }
  }
  return allDivisors;
}

function getQuadraticEvaluation(a, b) {
  // four cases
  // a = positive int, b = positive int
  // a = negative int, b = positive int
  // a = positive int, b = negative int
  // a = negative int, b = negative int
  var n1 = 0, n2 = 0, n3 = 0, n4 = 0,
      largestN = 0, largestA = 0, largestB = 0,
      result;

  while (true) {
    result = (n1 * n1) + (a * n1) + b;
    if (!isPrime(result)) { n1--; break; }
    n1++;
  }
  if (n1 > largestN) { largestN = n1; largestA = a, largestB = b; }

  while (true) {
    result = (n2 * n2) - (a * n2) + b;
    if (!isPrime(result)) { n2--; break; }
    n2++;
  }
  if (n2 > largestN) { largestN = n2; largestA = -a, largestB = b; }

  while (true) {
    result = (n3 * n3) + (a * n3) - b;
    if (!isPrime(result)) { n3--; break; }
    n3++;
  }
  if (n3 > largestN) { largestN = n3; largestA = a, largestB = -b; }

  while (true) {
    result = (n4 * n4) - (a * n4) - b;
    if (!isPrime(result)) { n4--; break; }
    n4++;
  }
  if (n4 > largestN) { largestN = n4; largestA = -a, largestB = -b; }

  return {n: largestN, a: largestA, b: largestB};
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (var i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function removeDuplicates(arr) {
  var uniqueArr = new Array();
  arr.sort();
  for(i=0; i < arr.length; i++){
    if(arr[i] == arr[i+1]) { continue; }
    uniqueArr[uniqueArr.length] = arr[i];
  }
  return uniqueArr;
}

main();
