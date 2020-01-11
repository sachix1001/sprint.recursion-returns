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
    this.row = 0;
    this.col = 0;
  }

  solve() {
    let count = 0;
    const board = this.board;

    function findPath(row, col) {
      console.log(row, col);
      if (board.board.length === row && board.board.length === col) {
        count++;
        return;
      }
      // if (row > 0 || board.length > row || col > 0 || board.length > col) {
      if (!board.hasBeenVisited(row, col)) {
        board.togglePiece(row, col);
        findPath(row + 1, col);
      }
      if (!board.hasBeenVisited(row, col)) {
        findPath(row, col + 1);
        findPath(row + 1, col);
      }
      if (!board.hasBeenVisited(row, col)) {
        board.togglePiece(row, col);
        findPath(row - 1, col);
      }
      if (!board.hasBeenVisited(row, col)) {
        board.togglePiece(row, col);
        findPath(row, col - 1);
      }
      // }
    }
    findPath(0, 0);
    return count;
  }
}

module.exports = { RobotPaths };
