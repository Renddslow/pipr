import test from 'ava';

import pipr from './index';

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

test(`pipr - errors when a function isn't a function`, (t) => {
  const square = (a) => a * a;
  // @ts-ignore
  const error = t.throws(() => pipr([square, 12])(13));
  t.is(error.message, 'Each value of the function array must be a callable function');
});
