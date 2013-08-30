function getPythagoreanTriplets(sum) {
  var a, b, c;
  for (a = 0; a < sum; a++) {
    for (b = a; b < sum; b++) {
      c = Math.sqrt((a * a) + (b * b));
      if (c > b && b > a && a + b + c === sum) {
        return {a: a,
          b: b,
          c: c};
      }
    }
  }
}

//use for problem
var triplets = getPythagoreanTriplets(1000);
var result = triplets.a * triplets.b * triplets.c;
console.log(result);
