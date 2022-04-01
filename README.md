# pipr

> A tiny (381 bytes ESM/527 bytes CJS) function for piping the results of one function to the next.

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

### eject(cb)

#### cb

Type: `(...any) => boolean`

Required: ✅

A callback that will be invoked with the results of the previous function, but will end the execution of the pipe if its result evaluates to `true`.

**Example**

```typescript
const pipr,
  { eject } = require('pipr');

const validateHexLength = (val: string) => {
  if (![3, 4, 6, 8].includes(val.length)) {
    return new Error(
      'Hex code must be either 3 (RGB shorthand), 4 (RGBA shorthand), 6 (RGB), or 8 (RBA) characters long',
    );
  }
  return val;
};

const validateHexCharacters = (val: string) => {
  if (/[g-z]/.test(val)) {
    return new Error('Must be a valid hex code (0-9, a-f)');
  }
  return val;
};

pipr<string>([validateHexLength, eject((v) => v instanceof Error), validateHexCharacters])(
  'acc35bb18',
); // => Error: Hex code must be either 3 (RGB shorthand), 4 (RGBA shorthand), 6 (RGB), or 8 (RBA) characters long
```
