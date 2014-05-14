function main() {
  var allPermutations = [],
      targetPermutation = 1000000,
      result;

  allPermutations = getAllPermutations('0123456789');
  result = allPermutations[targetPermutation - 1];

  console.log(result);
  return result;
}

function getAllPermutations(str) {
  var strArr = str.split(''),
      allPermutations = [],
      finished = [];

  function permutation(strArr) {
    for (var i = 0; i < strArr.length; i++) {
      var element = strArr.splice(i, 1)[0];
      finished.push(element);
      if (strArr.length === 0) { allPermutations.push(finished.slice().join('')); }
      permutation(strArr);
      strArr.splice(i, 0, element);
      finished.pop();
    }
    return allPermutations;
  }

  return permutation(strArr);
}

main();
