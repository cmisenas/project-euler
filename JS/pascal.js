function Pascal(x, y) {
  if (x === 1 ||
      (x === y)) {
    return 1;
  } else {
    return Pascal(x - 1, y - 1) + Pascal(x, y - 1);
  }
}


console.log(Pascal(1, 4));
console.log(Pascal(2, 4));
console.log(Pascal(3, 5));
