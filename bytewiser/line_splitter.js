var path = process.argv[2],
    newl = '\n'.charCodeAt(0),
    fs   = require('fs');

var file  = fs.readFileSync(path),
    start = 0,
    curr;

while ((curr = file.indexOf(newl, start)) !== -1) {
    console.log(file.slice(start, curr));
    start = curr + 1;
}

console.log(file.slice(start, curr));


