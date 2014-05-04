function combinations(gridsize) {
  var paths = 1;
  for (var i = 0; i < gridsize; i++) {
    paths *= (2 * gridsize) - i;
    paths /= i + 1;
  }
  return paths;
}

var result = combinations(20);
console.log(result);
