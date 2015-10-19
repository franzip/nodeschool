var filteredLs = require("./ls-module"),
    dirname    = process.argv[2],
    extname    = process.argv[3];

filteredLs(dirname, extname, function(err, data) {
    if (err) {
        console.log("An error occurred with folder: " + dirname);
        return err;
    }

    data.forEach(function(file) {
        console.log(file);
    });
});
