type ResultType<First extends (...args: any) => any, Last extends (...args: any) => any> = [
  Last,
] extends [never]
  ? ReturnType<First>
  : ReturnType<Last>;

export default <
  First extends (...args: any) => any,
  Last extends ((...args: any) => any) | never = never
>(
  fns: [First, ...((...args: any) => any)[], Last] | [First],
) => (...args: Parameters<First>): ResultType<First, Last> => {
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

export const eject = (cb: (...args: any) => any): ((...args: any) => any) =>
  new Proxy(cb, {
    get: (o: ((...args: any) => any) & Record<string, any>, k: string) => {
      if (k === 'name') return '@pipr/eject';
      return o[k];
    },
  });
