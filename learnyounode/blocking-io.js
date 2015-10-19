var fs  = require('fs'),
    str = fs.readFileSync(process.argv[2]).toString(),
    res = str.split("\n").length - 1;

console.log(res);


