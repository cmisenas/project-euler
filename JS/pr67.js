var fs = require("fs");

function main() {
  var filename = process.argv[2];
  if (filename === undefined || filename === null) { throw "No file provided"; }

  fs.readFile(filename, "ascii", function (error, data) {
    if (error !== undefined && error !== null) { throw error; }
    processPyramid(formPyramid(data));
  });
}

function formPyramid(data) {
  var inputs = data.split("\n"),
      pyramid = [];
  for (var i=0; i < inputs.length; i++) {
    if(inputs[i]){
      pyramid.push(inputs[i].split(' ').map(function(el){return parseInt(el, 10);}));
    }
  }

  return pyramid;
}

function processPyramid(pyramid) {
  var currentLevel = 0;
  var resultLevel = [];
  var prevNodes = [];
  var prevResult = [];
  for (var i = 0; i < pyramid.length; i++) {
    for (var j = 0; j < pyramid[i].length; j++) {
      if (i === 0) {
        prevNodes.push(0);
      } else if (j === 0) {
        prevNodes.push(prevResult[j]);
      } else if (j === pyramid[i].length - 1) {
        prevNodes.push(prevResult[j - 1]);
      } else {
        prevNodes.push(prevResult[j - 1], prevResult[j]);
      }

      resultLevel[j] = getMax(prevNodes) + pyramid[i][j];
      prevNodes = [];
    }
    prevResult = resultLevel.slice(0);
  }

  console.log(Math.max.apply(Math, resultLevel));
}

function getMax(arr) {
  return Math.max.apply(Math, arr);
}

main();

