import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';
import eslint from '@rbnlffl/rollup-plugin-eslint';
import resolve from '@rollup/plugin-node-resolve';

export default [
  {
    input: './src/index.ts',
    output: [
      {
        name: 'videoRatio',
        file: pkg.browser,
        format: 'umd'
      },
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins: [
      resolve(),
      eslint({
        throwOnError: true
      }),
      typescript({ tsconfig: './tsconfig.json' }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**' // 只编译我们的源代码
      }),
      terser()
    ]
  }
];
