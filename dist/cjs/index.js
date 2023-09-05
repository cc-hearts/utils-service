'use strict';

var fs = require('./src/lib/fs.js');
var path = require('./src/lib/path.js');
var pkg = require('./src/lib/pkg.js');



exports.cpFile = fs.cpFile;
exports.rm = fs.rm;
exports.validateFilePathOrCreateMkdir = fs.validateFilePathOrCreateMkdir;
exports.cwdJoin = path.cwdJoin;
exports.resolveCurrentPath = path.resolveCurrentPath;
exports.getPackage = pkg.getPackage;
