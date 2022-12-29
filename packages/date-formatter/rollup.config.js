import typescript from '@rollup/plugin-typescript';

export default {
  input: 'DateFormatter.ts',
  output: {
    dir: 'dist'
  },
  plugins: [typescript({ module: "ESNext" })],
  external: ['bignumber.js']
};