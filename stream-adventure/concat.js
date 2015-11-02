var concat = require('concat-stream');

function reverse(buffer) {
    var output = buffer.toString().split('').reverse().join('');
    process.stdout.write(output);
}

process.stdin.pipe(concat(reverse));
