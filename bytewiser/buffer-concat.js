var acc = [];

process.stdin.on('data', function(buff) {
    acc.push(buff);
});

process.stdin.on('end', function() {
    console.log(Buffer.concat(acc));
});
