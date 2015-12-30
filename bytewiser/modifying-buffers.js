var dot  = '.'.charCodeAt(0),
    bang = '!'.charCodeAt(0);

process.stdin.on('data', function(buff) {
    for (var i = 0; i < buff.length; i++) {
        if (buff[i] === dot) {
            buff.write(String.fromCharCode(bang), i);
        }
    }
    console.log(buff);
});
