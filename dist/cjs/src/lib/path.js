'use strict';

var url = require('url');
var path = require('path');
var valid = require('./valid.js');
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
async function findUpPkg(path$1, fileName) {
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
    return findUpPkg(path.resolve(path$1, '..'), fileName);
}

exports.cwdJoin = cwdJoin;
exports.findUpPkg = findUpPkg;
exports.resolveCurrentPath = resolveCurrentPath;
