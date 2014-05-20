/*
 * There are only 4 factorions (digit factorial)
 * with base 10:
 * 1, 2, 145, 40585
 * The problem states that 1 and 2 factorial are
 * not really sums so they should not be counted.
 */

function main() {
  var validFactorions = [145, 40585],
      result = sumArray(validFactorions);

  console.log(result);
  return result;
}

function sumArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) { sum += arr[i]; }
  return sum;
}

main();
