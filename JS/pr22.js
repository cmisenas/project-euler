var fs = require("fs");

function main() {
  var filename = process.argv[2],
      allNameScores;

  if (filename === undefined || filename === null) { throw "No file provided"; }

  fs.readFile(filename, "ascii", function (error, data) {
    if (error !== undefined && error !== null) { throw error; }
    allNameScores = getNameScores(data);
    console.log(allNameScores);
  });
}

function getNameScores(names) {
  var sortedNames, nameScores,
      total = 0;

  sortedNames = names.replace(/\"/g, '').split(',').sort();

  for (var i = 0; i < sortedNames.length; i++) {
    total += (calculateNameScore(sortedNames[i]) * (i + 1));
  }
  return total;
}

function calculateNameScore(name) {
  var charCodeOffset = 64,
      total = 0;

  for (var i = 0; i < name.length; i++) {
    total += (name.charCodeAt(i) - charCodeOffset);
  }

  return total;
}

main();

