export default (fns: Array<Function>) => (...args: any) => {
  if (fns.some((f) => typeof f !== 'function'))
    throw new Error('Each value of the function array must be a callable function');
  let idx = 0;
  let res = fns.length ? fns[idx].apply(null, args) : args[0];
  for (; ++idx < fns.length; ) {
    if (fns[idx].name === '@pipr/eject') {
      const bool = fns[idx].call(null, res);
      if (bool) break;
    } else {
      res = fns[idx].call(null, res);
    }
  }
  return res;
};

export const eject = (cb: Function) =>
  new Proxy(cb, {
    get: (o, k) => {
      if (k === 'name') return '@pipr/eject';
      return o[k];
    },
  });
