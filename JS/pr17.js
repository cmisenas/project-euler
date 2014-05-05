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
    console.log(i);
    divisor = i >= 100 && i < 1000 ? 100 : 1000 ;

    switch(true) {
      case i < 100:
        break;
      // always put the prefix to hundreds or thousands
      case true:
        currentWord.unshift(ones[Math.floor(i/divisor)]);
      case i >= 100 && i < 1000:
        currentWord.push(large[0]);
        break;
      case i >= 1000:
        currentWord.push(large[1]);
        break;
    }


    smallerN = i % 100;
    switch(true) {
      case currentWord.length > 0 && smallerN > 0:
        currentWord.push('and');
      case smallerN < 10:
        currentWord.push(ones[smallerN]);
        break;
      case smallerN >= 10 && smallerN < 20:
        currentWord.push(teens[smallerN - 9]);
        break;
      // multiples of ten
      case smallerN >= 20 && smallerN % 10 === 0:
        currentWord.push(tens[Math.floor(smallerN/10)]);
        break;
      case smallerN >= 20 && smallerN % 10 > 0:
        currentWord.push(tens[Math.floor(smallerN/10)]);
        currentWord.push(ones[smallerN % 10]);
        break;
    }

    console.log(currentWord.join(''));
    numWordsToThousand.push(currentWord.join(''));
    currentWord = []
  }
}

main();
