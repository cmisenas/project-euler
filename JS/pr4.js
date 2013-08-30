function largestPalindromeOf3Digits() {
  var largest = 0,
      prod;
  for (var i = 100; i < 1000; i++) {
    for (var j = 100; j < 1000; j++) {
      prod = i * j;
      if (isPalindrome(prod) === true && prod > largest) {
        largest = prod;
      }
    }
  }
  return largest;
}

function isPalindrome(num) {
  var str = num.toString(10);
  for (var i = 0, j = str.length - 1; i < Math.ceil(str.length / 2); i++, j--) {
    if (str[i] !== str[j]) {
      return false;
    }
  }
  return true;
}

//use for problem
var result = largestPalindromeOf3Digits(1000);
console.log(result);
