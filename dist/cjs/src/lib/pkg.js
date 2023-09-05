'use strict';

var promises = require('fs/promises');
var path = require('path');

async function getPackage(path$1) {
    path$1 = path$1 || path.resolve(process.cwd(), 'package.json');
    const packages = await promises.readFile(path$1, { encoding: 'utf-8' });
    return JSON.parse(packages);
}

exports.getPackage = getPackage;
