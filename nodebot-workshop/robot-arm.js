var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function () {
    var servo         = new five.Servo(9),
        potentiometer = new five.Sensor('A2');

    potentiometer.on('change', function() {
        var value = this.value;
        value = five.Fn.map(value, 0, 1023, 0, 179);
        servo.to(value);
    });
});
