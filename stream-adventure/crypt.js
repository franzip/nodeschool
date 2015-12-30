var crypto = require('crypto'),
    pass   = process.argv[2],
    stream = crypto.createDecipher('aes256', pass);

process.stdin
    .pipe(stream)
    .pipe(process.stdout);
