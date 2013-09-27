
var Stack = require('./').Stack
  , Cell = require('./').Cell
  , assert = require('assert')

var $1 = Stack()
  , $2 = Stack()

var a = Cell(4)
  , b = Cell(a << 1)
  , c = Cell(b << 1)
  , d = Cell(c << 1)
  , e = Cell(d << 1)

$1.push(a).push(b)
$2.push(c).push(d)

assert('4' === String(a));
assert('12' === String($1));

assert(12 == $1);
assert(48 == $2);

assert(4 == a);
assert(8 == b);
assert(16 == c);
assert(32 == d);
assert(64 == e);

assert($1 & a);
assert($1 & b);
assert(($1 & c) == 0);

assert(a == a << 0);
assert(b == a << 1);
assert(c == a << 2);
assert(d == a << 3);
assert(e == a << 4);

var x = Cell(50)
  , y = Cell(75)

var s = Stack()
  , t = Stack()

s.push(x);
t.push(y);

assert(50 == x);
assert(75 == y);

assert(50 == s);
assert(75 == t);
assert(125 == s + t);

x.v = 25;
y.v = 50;
assert(25 == s);
assert(50 == t);
assert(75 == s + t);

assert(x & s);
assert(y & t);

s.push(t);

assert(75 == s);
assert(50 == t)
assert(s & t);

y.v = x;

assert(50 == s);
assert(25 == t);

