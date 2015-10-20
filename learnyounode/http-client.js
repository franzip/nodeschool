var http = require("http"),
    url  = process.argv[2];

http.get(url, function(res) {
    res.setEncoding("utf-8");

    res.on("data", function(chunk) {
        console.log(chunk);
    });

    res.on("error", function(chunk) {
        console.error(chunk);
    });
});
