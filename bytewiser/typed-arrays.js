process.stdin.on('data', function(buffer) {
    var typed = new Uint8Array(buffer);
    console.log(JSON.stringify(typed));
});
