function getTriangleNums(num) {
  var sum = 0;
  for (var i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}

function getAllFactors(num) {
  var factors = [1];
  for (var i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      factors.push(i, num/i);
    }
  }
  return factors;
}

function getTriNumsWithNFac(numFac) {
  var i = numFac,
      triNum = getTriangleNums(i);
  while (getAllFactors(triNum).length < numFac) {
    i++;
    triNum = getTriangleNums(i);
  }
  return triNum;
}

//execute
var result = getTriNumsWithNFac(500);
console.log(result);
