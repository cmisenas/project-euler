function main() {
  var n = 1001,
      end = n * n,
      increment = 2,
      times = 0,
      sum = 0
      first = true,
      amountOfTimes = 5;
  for (var i = 1; i <= end; i+= increment) {
    sum += i;
    times++;
    if (times === amountOfTimes) {
      increment += 2;
      times = 0;
      first = false;
      amountOfTimes = 4;
    }
  }
  console.log(sum);
  return sum;
}

main();
