'use strict';

var promises = require('fs/promises');
var path = require('path');

/**
 * Retrieves the contents of a package.json file.
 *
 * @param {string=} path - The path to the package.json file. If not provided, the current working directory will be used.
 * @return {Promise<object>} A promise that resolves to the parsed contents of the package.json file.
 */
async function getPackage(path$1) {
    path$1 = path$1 || path.resolve(process.cwd(), 'package.json');
    const packages = await promises.readFile(path$1, { encoding: 'utf-8' });
    return JSON.parse(packages);
}

exports.getPackage = getPackage;
