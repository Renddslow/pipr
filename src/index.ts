export default (fns: Array<Function>) => (...val: any) =>
  fns.reduce((a, v) => {
    if (typeof v !== 'function')
      throw new Error('Each value of the function array must be a callable function');
    return v(...(Array.isArray(a) ? a : [a]));
  }, val);
