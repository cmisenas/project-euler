function main() {
  var amicableNumbers = [],
      amicablePair;

  for (var i = 1; i <= 10000; i++) {
    if (amicableNumbers.indexOf(i) > -1) { continue; }

    amicablePair = getAmicableNumber(i);
    if (amicablePair !== false) {
      amicableNumbers.push(i, amicablePair);
    }
  }

  console.log(sumArry(amicableNumbers));
}

function getAmicableNumber(n) {
  var nDivisors = getAllDivisors(n),
      pairNum = sumArry(nDivisors),
      pairNumDivisors = getAllDivisors(pairNum),
      pairNumSum = sumArry(pairNumDivisors);

  if (pairNumSum === n && pairNumSum !== pairNum) { return pairNum; }
  return false;
}

function getAllDivisors(n) {
  var allDivisors = [];
  for (var i = 1, max = n/2; i <= max; i++) {
    if (n % i === 0) { allDivisors.push(i); }
  }
  return allDivisors;
}

function sumArry(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

main();
