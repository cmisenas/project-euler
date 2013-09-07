function collatzSequence(start) {
  var sequence = [start],
      current = start;
  while (current !== 1) {
    if (isEven(current)) {
      current = current/2;
    } else {
      current = 3 * current + 1;
    }
    sequence.push(current);
  }
  return sequence;
}

function isEven(n) {
  return n % 2 === 0;
}

function getLongestCS(max) {
  var startingNum = max;
      currentLongest = collatzSequence(startingNum).length,
      currentNum = startingNum,
      currentSequence = currentLongest;
  while (startingNum > 1) {
    startingNum--;
    currentSequence = collatzSequence(startingNum);
    if (currentSequence.length > currentLongest) {
      currentLongest = currentSequence.length; 
      currentNum = startingNum;
    }
  }
  return currentNum;
}

var result = getLongestCS(1000000 - 1);
console.log(result);
