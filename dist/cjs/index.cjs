'use strict';

var fs$1 = require('fs');
var fs = require('fs/promises');
var url = require('url');
var path = require('path');

async function rm(path) {
    fs.rm(path, { recursive: true, force: true });
}
/**
 * copy file
 * @param {string} originFilePath
 * @param {string} targetFilePath
 * @returns {Promise<void>}
 */
async function cpFile(originFilePath, targetFilePath) {
    const path = targetFilePath.split("/").slice(0, -1).join("/");
    if (!fs$1.existsSync(path)) {
        await fs.mkdir(path, { recursive: true });
    }
    return fs.copyFile(originFilePath, targetFilePath);
}

/**
 * used in the alias of vite's configuration file etc.
 * @param {string} url is import.meta.url
 * @param {string} dir resolve paths
 * @returns {string}
 */
function resolveCurrentPath(url$1, dir) {
    return path.resolve(url.fileURLToPath(url$1), dir);
}

exports.cpFile = cpFile;
exports.resolveCurrentPath = resolveCurrentPath;
exports.rm = rm;