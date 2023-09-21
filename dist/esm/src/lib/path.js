import { fileURLToPath } from 'url';
import { resolve } from 'path';
import { isDirectory } from './valid.js';
import { existsSync } from 'fs';

/**
 * used in the alias of vite's configuration file etc.
 *
 * @param {string} url is import.meta.url
 * @returns {string}
 */
function resolveCurrentPath(url) {
    return resolve(fileURLToPath(url), '..');
}
/**
 * Join the current working directory with the provided path arguments.
 *
 * @param {...string[]} args - The path arguments to join with the current working directory.
 * @return {string} - The joined path.
 */
function cwdJoin(...args) {
    return resolve(process.cwd(), ...args);
}
/**
 * Step up to find the most recent file
 *
 * @param path
 * @returns
 */
async function findUpFile(path, fileName) {
    if (fileName === void 0) {
        throw new Error('fileName is required');
    }
    let curPath;
    if (await isDirectory(path)) {
        curPath = resolve(path, 'package.json');
    }
    else {
        curPath = resolve(path, '../package.json');
    }
    if (existsSync(curPath)) {
        return curPath;
    }
    if (path === '/')
        return null;
    return findUpFile(resolve(path, '..'), fileName);
}
async function findUpPkg(path) {
    return findUpFile(path, 'package.json');
}

export { cwdJoin, findUpFile, findUpPkg, resolveCurrentPath };
