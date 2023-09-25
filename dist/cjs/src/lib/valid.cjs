'use strict';

var promises = require('fs/promises');

/**
 * Checks if the given path points to a file.
 *
 * @param {string} path - The path to check.
 * @return {Promise<boolean>} A promise that resolves to a boolean indicating whether the path points to a file.
 */
async function isFile(path) {
    const file = await promises.stat(path);
    return file.isFile();
}
/**
 * Checks if the given path is a directory.
 *
 * @param {string} path - The path to check.
 * @return {Promise<boolean>} A promise that resolves to true if the path is a directory, false otherwise.
 */
async function isDirectory(path) {
    const file = await promises.stat(path);
    return file.isDirectory();
}

exports.isDirectory = isDirectory;
exports.isFile = isFile;
