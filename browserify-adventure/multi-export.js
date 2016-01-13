var toParse     = prompt(''),
    toSerialize = prompt(''),
    parse       = require('./ndjson').parse,
    stringify   = require('./ndjson').stringify;

console.log(parse(toParse));
console.log(stringify(toSerialize));
