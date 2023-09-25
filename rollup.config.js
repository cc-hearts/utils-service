import typescript from '@rollup/plugin-typescript'
import tsConfig from './tsconfig.json' assert { type: 'json' }
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

tsConfig.compilerOptions.declaration = false

export default {
  input: './index.ts',
  output: [
    {
      preserveModules: true,
      dir: 'dist/cjs',
      format: 'cjs',
      entryFileNames: '[name].cjs',
    },
    {
      preserveModules: true,
      dir: 'dist/esm',
      format: 'esm',
    },
  ],
  plugins: [resolve(), commonjs(), typescript(tsConfig)],
}
