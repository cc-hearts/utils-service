# utils-service

Tool libraries for the JavaScript runtime

## Install

```shell
npm install @cc-heart/utils-service
```

## Usage

```js
import { findUpFile } from '@cc-heart/utils-service'
import { resolve } from 'path'
const pkgPath = findUpFile(process.cwd(), 'package.json')
// ...
```
