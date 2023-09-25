'use strict';

var url = require('url');
var path = require('path');
var valid = require('./valid.cjs');
var fs = require('fs');

/**
 * used in the alias of vite's configuration file etc.
 *
 * @param {string} url is import.meta.url
 * @returns {string}
 */
function resolveCurrentPath(url$1) {
    return path.resolve(url.fileURLToPath(url$1), '..');
}
/**
 * Join the current working directory with the provided path arguments.
 *
 * @param {...string[]} args - The path arguments to join with the current working directory.
 * @return {string} - The joined path.
 */
function cwdJoin(...args) {
    return path.resolve(process.cwd(), ...args);
}
/**
 * Step up to find the most recent file
 *
 * @param path
 * @returns
 */
async function findUpFile(path$1, fileName) {
    if (fileName === void 0) {
        throw new Error('fileName is required');
    }
    let curPath;
    if (await valid.isDirectory(path$1)) {
        curPath = path.resolve(path$1, 'package.json');
    }
    else {
        curPath = path.resolve(path$1, '../package.json');
    }
    if (fs.existsSync(curPath)) {
        return curPath;
    }
    if (path$1 === '/')
        return null;
    return findUpFile(path.resolve(path$1, '..'), fileName);
}
/**
 * Finds the nearest "package.json" file by traversing up the directory tree starting from the given path.
 *
 * @param {string} path - The starting path to search from.
 * @return {Promise<string>} A Promise that resolves to the path of the nearest "package.json" file, or null if not found.
 */
async function findUpPkg(path) {
    return findUpFile(path, 'package.json');
}

exports.cwdJoin = cwdJoin;
exports.findUpFile = findUpFile;
exports.findUpPkg = findUpPkg;
exports.resolveCurrentPath = resolveCurrentPath;
