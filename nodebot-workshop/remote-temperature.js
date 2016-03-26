var five = require('johnny-five');
var board = new five.Board();
var dnode = require('dnode');

board.on('ready', function () {
    var sensor = new five.Sensor('A0'),
        temp   = null;

    sensor.on('data', function() {
        temp = ((this.value * 0.004882814) - 0.5) * 100;
    });

    var server = dnode({
        getTemperature: function(cb) {
            cb(temp);
        }
    });

    server.listen(1337);
});

