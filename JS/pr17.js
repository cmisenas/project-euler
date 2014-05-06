var ones = [null, 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var teens = [null, 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tens = [null, null, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
var large = ['hundred', 'thousand'];

function main() {
  var numWordsToThousand = [];
  var prefix;
  var smallerN;
  var currentWord = [];
  var divisor = 0;

  for (var i = 1; i <= 1000; i++) {
    divisor = i >= 100 && i < 1000 ? 100 : 1000 ;

    if (i >= 100) {
      currentWord.unshift(ones[Math.floor(i/divisor)]);
    }

    if (i >= 100 && i < 1000) {
      currentWord.push(large[0]);
    } else if (i >= 1000) {
      currentWord.push(large[1]);
    }

    smallerN = i % 100;

    if (currentWord.length > 0 && smallerN > 0) {
      currentWord.push('and');
    }

    if (smallerN < 10) {
      currentWord.push(ones[smallerN]);
    } else if (smallerN >= 10 && smallerN < 20) {
      currentWord.push(teens[smallerN - 9]);
    } else if (smallerN >= 20 && smallerN % 10 === 0) {
      currentWord.push(tens[Math.floor(smallerN/10)]);
    } else if (smallerN >= 20 && smallerN % 10 > 0) {
      currentWord.push(tens[Math.floor(smallerN/10)]);
      currentWord.push(ones[smallerN % 10]);
    }

    numWordsToThousand.push(currentWord.join(''));
    currentWord = []
  }

  var result = numWordsToThousand.join('').length;
  console.log(result);
}

main();
