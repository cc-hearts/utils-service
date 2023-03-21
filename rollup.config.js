import typescript from "@rollup/plugin-typescript";
import tsConfig from "./tsconfig.json" assert { type: "json" };
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

tsConfig.compilerOptions.declaration = false

export default {
  input: "./index.ts",
  output: [
    {
      file: "dist/cjs/index.cjs",
      format: "cjs",
    },
    {
      file: "dist/esm/index.js",
      format: "esm",
    },
  ],
  plugins: [resolve(), commonjs(), typescript(tsConfig)],
};
