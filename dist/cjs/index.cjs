'use strict';

var fs = require('./src/lib/fs.cjs');
var path = require('./src/lib/path.cjs');
var pkg = require('./src/lib/pkg.cjs');
var valid = require('./src/lib/valid.cjs');



exports.cpFile = fs.cpFile;
exports.rm = fs.rm;
exports.validateFilePathOrCreateMkdir = fs.validateFilePathOrCreateMkdir;
exports.cwdJoin = path.cwdJoin;
exports.findUpFile = path.findUpFile;
exports.findUpPkg = path.findUpPkg;
exports.resolveCurrentPath = path.resolveCurrentPath;
exports.getPackage = pkg.getPackage;
exports.isDirectory = valid.isDirectory;
exports.isFile = valid.isFile;
