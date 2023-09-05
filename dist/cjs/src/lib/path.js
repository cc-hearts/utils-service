'use strict';

var url = require('url');
var path = require('path');

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

exports.cwdJoin = cwdJoin;
exports.resolveCurrentPath = resolveCurrentPath;
