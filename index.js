

exports.Stack = Stack;
function Stack () {
  if (!(this instanceof Stack)) return new Stack();
  this.cells = [];
}

Stack.prototype.push = function (c) {
  this.cells.push(c);
  return this;
};

Stack.prototype.valueOf = function () {
  if (1 === this.cells.length) return this.cells[0].valueOf();
  else if (0 === this.cells.length) return 0;
  else return this.cells.reduce(function (c, n) { return c + n });
};

Stack.prototype.toString = function () {
  return String(Number(this));
};


exports.Cell = Cell;
function Cell (v) {
  if (!(this instanceof Cell)) return new Cell(v);
  this.v = v;
}

Cell.prototype.valueOf = function () {
  return this.v.valueOf();
}

Cell.prototype.toString = function () {
  return String(this.v);
};
