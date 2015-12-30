var cipherName = process.argv[2],
    passphrase = process.argv[3],
    concat     = require('concat-stream'),
    crypto     = require('crypto'),
    parser     = require('tar').Parse(),
    zlib       = require('zlib'),
    decipher   = crypto.createDecipher(cipherName, passphrase),
    hash;

parser.on('entry', function(entry) {
    if (entry.type !== 'File') {
        return;
    }
    hash = crypto.createHash('md5', { encoding: 'hex' });
    entry.pipe(hash).pipe(concat(function (hash) {
        console.log(hash + ' ' + entry.path);
    }));
});

process.stdin
    .pipe(decipher)
    .pipe(zlib.createGunzip())
    .pipe(parser);
