class Board {
  constructor(size) {
    this.board = [];
    for (let row = 0; row < size; row += 1) {
      this.board.push([]);
      for (let col = 0; col < size; col += 1) {
        this.board[row].push(false);
      }
    }
  }

  togglePiece(row, col) {
    this.board[row][col] = !this.board[row][col];
    return this.board;
  }
  hasBeenVisited(row, col) {
    return this.board[row][col];
  }
}

class RobotPaths {
  // initialize all your options
  // you may want to change this code later on, too
  constructor(size) {
    this.board = new Board(size);
    this.size = size - 1;
    this.row = 0;
    this.col = 0;
  }

  solve() {
    let path = 0;

    const findPath = (row, col) => {
      if (this.size === row && this.size === col) {
        path++;
        return;
      }
      this.board.togglePiece(row, col);

      const left = row - 1;
      const right = row + 1;
      const up = col - 1;
      const down = col + 1;
      if (left >= 0 && !this.board.hasBeenVisited(left, col)) {
        findPath(left, col);
      }
      if (right <= this.size && !this.board.hasBeenVisited(right, col)) {
        findPath(right, col);
      }
      if (up >= 0 && !this.board.hasBeenVisited(row, up)) {
        findPath(row, up);
      }
      if (down <= this.size && !this.board.hasBeenVisited(row, down)) {
        findPath(row, down);
      }
      this.board.togglePiece(row, col);
    };
    findPath(0, 0);
    return path;
  }
}

module.exports = { RobotPaths };
