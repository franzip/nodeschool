var fs  = require('fs'),
    str = fs.readFileSync(process.argv[2], 'utf-8'),
    res = str.split("\n").length - 1;

console.log(res);


