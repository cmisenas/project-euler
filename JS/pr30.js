function getDigitFifthPower() {
  var results = [], str, sum = 0;
  var upperBound=getUpperBound(5);//354294//6*Math.pow(9,5);
  for (var i = 2; i <= upperBound; i++) {
    str = (i).toString(10).split("").map(Number);
    for (var j = 0; j < str.length; j++) {
      sum += Math.pow(str[j], 5);
    }
    if (sum === i) { results.push(i); }
    sum = 0;
  }
  console.log(results);
  return results.reduce(function(a,b){return a+b;}, 0);
}

function getUpperBound(pow) {
  var maxD, maxDSum;
  for(var i=1; i<=9; i++) {
    maxDSum = (i*Math.pow(9,pow)).toString().split('').length;
    if(i>maxDSum) {
      maxD=i-1;
      break;
    }
  }
  return (maxD*Math.pow(9,pow));
}


//use for problem
var result = getDigitFifthPower();
console.log(result);
