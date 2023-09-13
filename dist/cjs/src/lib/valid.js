'use strict';

var promises = require('fs/promises');

async function isFile(path) {
    const file = await promises.stat(path);
    return file.isFile();
}
async function isDirectory(path) {
    const file = await promises.stat(path);
    return file.isDirectory();
}

exports.isDirectory = isDirectory;
exports.isFile = isFile;
