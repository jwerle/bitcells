
/**
 * `Stack` constructor
 *
 * @api public
 */

exports.Stack = Stack;
function Stack () {
  if (!(this instanceof Stack)) return new Stack();
  this.cells = [];
}


/**
 * Pushes a cell to the stack
 *
 * @api public
 * @param {Cell|Mixed} c
 */

Stack.prototype.push = function (c) {
  this.cells.push(c);
  return this;
};


/**
 * Returns the value of the
 * stack by adding all cell
 * values together
 *
 * @api public
 */

Stack.prototype.valueOf = function () {
  if (1 === this.cells.length) return this.cells[0].valueOf();
  else if (0 === this.cells.length) return 0;
  else return this.cells.reduce(function (c, n) { return c + n });
};


/**
 * Returns a string representation
 * of the stack
 *
 * @api public
 */

Stack.prototype.toString = function () {
  return String(Number(this));
};


/**
 * `Cell` constructor
 *
 * @api public
 * @param {Number} v
 */

exports.Cell = Cell;
function Cell (v) {
  if (!(this instanceof Cell)) return new Cell(v);
  this.v = v;
}


/**
 * Returns the value of the
 * cell
 *
 * @api public
 */

Cell.prototype.valueOf = function () {
  return this.v.valueOf();
}


/**
 * Returns a string representation
 * of the cell
 *
 * @api public
 */

Cell.prototype.toString = function () {
  return String(this.v);
};
