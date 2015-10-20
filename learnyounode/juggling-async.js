var http     = require("http"),
    urls     = [process.argv[2], process.argv[3], process.argv[4]],
    requests = urls.length,
    result   = Array(requests).join(".").split(".");

urls.forEach(function(url, idx) {
    http.get(url, function(res) {
        res.setEncoding("utf-8");

        res.on("data", function(chunk) {
            result[idx] += chunk;
        });

        res.on("end", function() {
            requests -= 1;

            if (!requests) {
                result.forEach(function(res) {
                    console.log(res);
                });
            }
        });
    });
});
