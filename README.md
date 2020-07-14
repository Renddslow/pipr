# pipr

> A tiny (317 bytes) function for piping the results of one function to the next.

## Install

```
$ yarn add pipr
```

## Usage

```js
const pipr = require('pipr');

const add = (a, b) => a + b;
const square = (a) => a * a;

pipr([add, square])(2, 1);
```

## API

### pipr(fns)(value)

#### fns

Type: `Array<Function>`

An array of functions. The starting value will be passed to the first function in the array, and the result will be passed to the next, and so on.

#### value

Type: `any`

A starting value which will be passed to the first function.
