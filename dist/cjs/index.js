'use strict';

var fs = require('./src/lib/fs.js');
var path = require('./src/lib/path.js');
var pkg = require('./src/lib/pkg.js');
var valid = require('./src/lib/valid.js');



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
