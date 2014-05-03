var paths = [];

function getAllPaths(currentPath, grid) {
  var currentPath = currentPath || [{x: 0, y: 0}];
  var possibleMoves = getPossibleMoves(currentPath[currentPath.length - 1], grid);
  var newPath = [];

  for (var i = 0; i < possibleMoves.length; i++) {
    newPath = currentPath.concat(possibleMoves[i]);
    if (reachedEndNode(newPath, grid)) {
      paths.push(newPath);
    } else {
      getAllPaths(newPath, grid);
    }
  }
}

function maxNodeCount(grid) {
  return grid.length * 2;
}

function reachedEndNode(currentPath, grid) {
  return currentPath[currentPath.length - 1].x === grid && currentPath[currentPath.length - 1].y === grid
}

function getPossibleMoves(coordinate, grid) {
  var possibleMoves = [];
  if (coordinate.x < grid) {
    possibleMoves.push({x: coordinate.x + 1, y: coordinate.y});
  }
  if (coordinate.y < grid) {
    possibleMoves.push({x: coordinate.x, y: coordinate.y + 1});
  }
  return possibleMoves;
}

var grid = 10;
getAllPaths(null, grid);
console.log(paths);
