function main() {
  var abundantIntegerLimit = 28123,
      total = 0,
      allAbundantNs = [],
      sums = [];

  for (var i = 1; i <= abundantIntegerLimit; i++) {
    if (isAbundant(i) === true) {
      allAbundantNs.push(i);
    }
  }

  for (var j = 0; j < allAbundantNs.length; j++) {
    for (var k = 0; k < allAbundantNs.length; k++) {
      sums[allAbundantNs[j] + allAbundantNs[k]] = true;
    }
  }

  for (var l = 1; l <= 28123; l++) {
    if (!sums[l]) { total += l; }
  }

  console.log(total);
  return total;
}

function sumOfTwoAbundantN(n) {
}

function isAbundant(n) {
  var allNDivisors = getAllDivisors(n),
      divisorSum = sumArray(allNDivisors);
  return divisorSum > n ? true : false;
}

function getAllDivisors(n) {
  var allDivisors = [],
      halfN = Math.floor(n/2);
  for (var i = 1; i <= halfN; i++) {
    if (n % i === 0) {
      allDivisors.push(i);
    }
  }
  return allDivisors;
}

function sumArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i], 10);
  }
  return sum;
}

main();
