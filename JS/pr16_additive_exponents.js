function multiplyBigInts(n1, n2) {
  var product = [];
  n1 = turnArryToInt(n1.split(''));
  n2 = turnArryToInt(n2.split(''));

  for( var i = n1.length - 1; i >= 0; i--) {
    var currentN = n1[i];
    var currentProd = new Array((n1.length - 1) - i);
    var overflow = 0;
    var prod = 0;
    for( var j = n2.length - 1; j >= 0; j--) {
      prod = currentN * n2[j] + overflow;
      if (prod > 9) {
        overflow = parseInt((prod + '').split('')[0], 10);
        prod = parseInt((prod + '').split('')[1], 10);
      } else {
        overflow = 0;
      }
      currentProd.unshift(prod);
    }
    if (overflow > 0) {
      currentProd.unshift(overflow);
    }
    product = sumTwoArrs(product, currentProd)
  }
  return product.join('');
}

function multiplyOntoItself(n) {
  return multiplyBigInts(n, n);
}

function sumTwoArrs(arr1, arr2) {
  var arr1ReverseCopy = arr1.reverse();
  var arr2ReverseCopy = arr2.reverse();
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

function turnArryToInt(arr) {
  for( var i = 0; i < arr.length; i++) {
    if (arr[i] !== undefined && arr[i] !== null) {
      arr[i] = parseInt(arr[i], 10);
    } else {
      arr[i] = 0;
    }
  }
  return arr;
}

function main() {
  var arbitraryStartExp = 50;
  var goalExp = 1000;
  var remainingExp = goalExp/arbitraryStartExp;
  var startVal = Math.pow(2, 50) + '';

  // Subtract 1 because we already started with that value
  for (var i = 0; i < remainingExp - 1; i++) {
    startVal = multiplyBigInts(startVal, Math.pow(2, 50) + '');
  }

  startValArr = startVal.split('');
  var result = 0;

  for (var j = 0; j < startValArr.length; j++) {
    result += parseInt(startValArr[j], 10);
  }

  return result;
}
console.log(main());
