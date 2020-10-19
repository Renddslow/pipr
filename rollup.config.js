import { terser } from 'rollup-plugin-terser';

module.exports = {
  input: 'build/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    exports: 'auto',
  },
  plugins: [terser()],
};
