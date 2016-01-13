var url         = require('url'),
    querystring = require('querystring'),
    address     = url.parse(prompt('')),
    query       = querystring.parse(address.query);

console.log(url.resolve(address, query.file));


