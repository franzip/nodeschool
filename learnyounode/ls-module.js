var fs   = require("fs"),
    path = require("path");

function filteredLs(dirname, filext, callback) {
    fs.readdir(dirname, function(err, files) {
        if (err) {
            return callback(err);
        }

        var result = files.filter(function(file) {
            return path.extname(file).slice(1) === filext;
        });

        callback(null, result);
    });
}

module.exports = filteredLs;
