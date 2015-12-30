var fs   = require("fs")
    path = require("path"),
    dir  = process.argv[2];

fs.readdir(dir, function(err, files) {
    var res = files.filter(function(file) {
        return path.extname(file).slice(1) === process.argv[3];
    });
    res.forEach(function(e) {
        console.log(e);
    });
});

