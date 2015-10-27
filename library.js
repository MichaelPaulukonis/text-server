var lib = [];

// TODO: error-handling, file-types, etc.
var walk = require('walkdir');
walk.sync('./library/', function(path, stat) {
    lib.push(require(path));
});

module.exports = lib;
