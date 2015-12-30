var net  = require("net"),
    port = process.argv[2];

function formatNumber(num) {
    return (Number(num) < 10) ? "0" + num : num;
}

function serveTime() {
    var date = new Date();

    return date.getFullYear() + "-"
        + formatNumber(date.getMonth() + 1) + "-"
        + formatNumber(date.getDate()) + " "
        + formatNumber(date.getHours()) + ":"
        + formatNumber(date.getMinutes()) + "\n";
}

var server = net.createServer(function(socket) {
    socket.end(serveTime());
});

server.listen(port);
