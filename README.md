bitcells
=====

Bitwise operations on mutable cells in a stack

## install

### npm

```sh
$ npm install bitcells --save
```

### component

```sh
$ component install jwerle/bitcells --save
```

## usage

```js
var Cell = require('bitcells').Cell
  , Stack = require('bitcells').Stack
  , assert = require('assert')


var $ = Stack()
  , a = Cell(4)
  , b = Cell(8)
  , c = Cell(16)

$.push(a).push(b)

assert(a & $);
assert(b & $);
assert(12 == $);

a.v = c;

assert(24 == $)
```

## why?

I don't know, just for fun.

## license

MIT
