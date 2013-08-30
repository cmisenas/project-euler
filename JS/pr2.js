function generateFibonacciToMax(max) {
  var first = 0,
      second = 1,
      next,
      sequence = [];
  while (second < max) {
    sequence.push(second);
    next = first + second;
    first = second;
    second = next;
  }
  return sequence;
}

function sum(numArr, filter) {
  var sum = 0;
  for (var i = 0; i < numArr.length; i++) {
    if (typeof filter !== 'undefined' && numArr[i] % filter === 0) {
      sum += numArr[i];
    }
  }
  return sum;
}

//execute
var result = sum(generateFibonacciToMax(4000000), 2);
console.log(result);
