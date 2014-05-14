function main() {
  var prevN = [0],
      currentN = [1],
      sum,
      nth = 1,
      digits = 1,
      limit = 1000;

  while (true) {
    if (digits >= limit) { break; }
    sum = sumTwoArrs(prevN, currentN);
    prevN = currentN.slice(0);
    currentN = sum.slice(0);
    nth++;
    digits = currentN.length;
  }

  console.log(nth);
  console.log(digits);
  return nth;
}

function sumTwoArrs(arr1, arr2) {
  var arr1ReverseCopy = arr1.slice(0).reverse();
  var arr2ReverseCopy = arr2.slice(0).reverse();
  var max = Math.max(arr1.length, arr2.length);
  var overflow = 0;
  var sumArr = [];
  var position;

  for (var i = 0; i < max; i++) {
    position = max - (i + 1);
    sumArr[position] = (arr1ReverseCopy[i] || 0) + (arr2ReverseCopy[i] || 0) + overflow;
    if (sumArr[position] > 9) {
      sumArr[position] -= 10;
      overflow = 1;
    } else {
      overflow = 0;
    }
  }

  if (overflow > 0) {
    sumArr.unshift(overflow);
  }

  return sumArr;
}

main();
