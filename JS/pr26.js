function main() {
  var i = 1,
      end = 1000,
      biggestCycleN = 0,
      biggestCycle = 0,
      currentCycle = 0;

  while (i < end) {
    currentCycle = getCycleLength(i);
    if(currentCycle > biggestCycle) {
      biggestCycle = currentCycle;
      biggestCycleN = i;
    }
    i++;
  }

  console.log("N at cycle: " + biggestCycleN, "Cycles: " + biggestCycle);
  return biggestCycleN;
}

function getCycleLength(i) {
  var cycleLen = 0,
      mantissa = [],
      n = 1;

  while(true) {
    n = (n % i) * 10;
    if (n === 0 || mantissa[n]) { break; }
    mantissa[n] = true;
    cycleLen++;
  }

  return cycleLen;
}

main();
