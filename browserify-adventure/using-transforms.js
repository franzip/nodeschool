var brfs    = require('brfs'),
    sprintf = require('sprintf').sprintf,
    fs      = require('fs'),
    content = fs.readFileSync('/usr/local/lib/node_modules/browserify-adventure/problems/using_transforms/wake.txt', 'utf-8'),
    result  = '';

content.split('\n').map(function(el, idx) {
    if (idx % 5 === 0) {
        result += sprintf('%3d %s', idx, el) + '\n';
    } else {
        result += sprintf('    %s', el) + '\n';
    }
});

console.log(result);

