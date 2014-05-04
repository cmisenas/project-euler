var powerWithin = 69;
var base = Math.pow(2, powerWithin);
var remainingPower = 1000 - powerWithin;
var baseArr = splitNumberIntoDigits(base);
var productArr = [];
var carryOver = 0;
var sum;
var carryOverArr;

for (var i = remainingPower - 1; i >= 0; i--) {
  for (var j = baseArr.length - 1; j >= 0; j--) {
    sum = baseArr[j] + baseArr[j] + carryOver;
    if (sum >= 10) {
      carryOverArr = splitNumberIntoDigits(sum);
      carryOver = carryOverArr[0];
      sum = carryOverArr[1];
    } else {
      carryOver = 0;
    }
    productArr.unshift(sum);
  }
  baseArr = productArr;
}

function addSameStringInt(stringInt) {
  this.cache = this.cache || {}, numInt = parseInt(stringInt, 10);
  cache[stringInt] = cache[stringInt] || numInt * 2;
  return cache[stringInt];
}

function splitNumberIntoDigits(num) {
  var numArr = (num + '').split('');
  for (var i = 0; i < numArr.length; i++) {
    numArr[i]= parseInt(numArr[i], 10);
  }
  return numArr;
}

if (carryOver > 0) {
  baseArr.unshift((carryOver + ''));
}

console.log(baseArr.join(''));

