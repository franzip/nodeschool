var fs   = require("fs")
    path = require("path");

fs.readdir(process.argv[2], function(err, files) {
    var res = files.filter(function(file) {
        return path.extname(file).slice(1) === process.argv[3];
    });
    res.forEach(function(e) {
        console.log(e);
    });
});

