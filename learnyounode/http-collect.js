var http = require("http"),
    url  = process.argv[2];

http.get(url, function(res) {
    res.setEncoding("utf-8");

    var result = '',
        length = 0;

    res.on('data', function(chunk) {
        result += chunk;
        length += chunk.length;
    });

    res.on('end', function(chunk) {
        console.log(length);
        console.log(result);
    });
});
