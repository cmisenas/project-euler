function happyPrime(n) {
  var happyPrimNums = [];
  for (var i = 0; happyPrimNums.length < n; i++) {
    if (isPrime(i) === true &&
        isHappy(i) === true) {
      happyPrimNums.push(i);
    }
  }
  console.log(happyPrimNums);
  return sumArr(happyPrimNums);
}

function isPrime(num) {
  if (num === 1) {
    return false;
  }

  for (var i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function isHappy(num) {
  var sequence = [];
  while (true) {
    num = sumArr(squareArr(num.toString(10).split('')));
    if (sequence[num] === true) {
      return false;
    }
    if (num === 1) {
      return true;
    }
    sequence[num] = true;
  }
}

function squareArr(numArr) {
  var squaredArr = [];
  for (var i = 0; i < numArr.length; i++) {
    squaredArr[i] = parseInt(numArr[i], 10) * parseInt(numArr[i], 10);
  }
  return squaredArr;
}

function sumArr(numArr) {
  var total = 0;
  for (var i = 0; i < numArr.length; i++) {
    total += parseInt(numArr[i], 10);
  }
  return total;
}

console.log('Is 1 Prime? %s', isPrime(1));
console.log('Is 3 Prime? %s', isPrime(3));
console.log('Is 1 Happy? %s', isHappy(1));
console.log('Is 7 Happy? %s', isHappy(7));
console.log('Is 10 Happy? %s', isHappy(10));
console.log('Is 4 Happy? %s', isHappy(4));
console.log('Sum of first 3 Happy-Prime numbers? %s', happyPrime(3));
