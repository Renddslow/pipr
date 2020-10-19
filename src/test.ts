import test from 'ava';

import pipr, { eject } from './index';

test('pipr - returns the expected result of one function with one argument', (t) => {
  const square = (a) => a * a;
  t.is(pipr([square])(2), 4);
});

test('pipr - returns the expected result of two functions with one argument', (t) => {
  const square = (a) => a * a;
  const subtract = (sub) => (a) => a - sub;
  t.is(pipr([square, subtract(3)])(2), 1);
});

test('pipr - returns the expected result of two functions with two arguments', (t) => {
  const add = (a, b) => a + b;
  const square = (a) => a * a;
  t.is(pipr([add, square])(2, 3), 25);
});

test('pipr - returns the expected result of two functions with array results', (t) => {
  const combine = (a, b) => [...a, ...b].sort();
  const square = (a) => a.map((v) => v * v);
  t.deepEqual(pipr([combine, square])([1, 2, 6, 4], [2, 3, 4]), [1, 4, 4, 9, 16, 16, 36]);
});

test(`pipr - errors when a function isn't a function`, (t) => {
  const square = (a) => a * a;
  // @ts-ignore
  const error = t.throws(() => pipr([square, 12])(13));
  t.is(error.message, 'Each value of the function array must be a callable function');
});

test(`pipr - returns result of first function when middleware ejects`, (t) => {
  const square = (a) => a * a;
  const power = (a) => a ** 10;
  t.is(
    pipr([
      square,
      eject((v) => {
        return v === 1;
      }),
      power,
    ])(1),
    1,
  );
});

test(`pipr - returns result of last function when middleware doesn't eject`, (t) => {
  const square = (a) => a * a;
  const power = (a) => a ** 10;
  t.is(
    pipr([
      square,
      eject((v) => {
        return v === 1;
      }),
      power,
    ])(3),
    3486784401,
  );
});
