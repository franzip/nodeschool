var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function () {

    var led         = new five.Led(13),
        piezo       = new five.Piezo(9),
        button      = new five.Button(5),
        temperature = new five.Sensor('A0');

    var resetting     = false,
        isFireOn      = false,
        alarmInterval = null;

    temperature.on('change', function() {
        var temp = ((this.value * 0.004882814) - 0.5) * 100;
        if (temp > 50) {
            if (!resetting) {
                toggleAlarm();
            }
        } else {
            resetAlarm();
            resetting = false;
        }
    });

    button.on('press', function() {
        if (!isFireOn) {
             return;
        }
        resetting = true;
        resetAlarm();
    });

    function toggleAlarm() {
        if (isFireOn) {
             return;
        }

        isFireOn = true;
        piezo.tone(five.Piezo.Notes.c4, 750);
        alarmInterval = setInterval(function() {
            piezo.tone(five.Piezo.Notes.c4, 750);
        }, 1000);

        led.strobe(1000);
    }

    function resetAlarm() {
        if (!isFireOn) {
             return;
        }
        clearInterval(alarmInterval);
        led.stop().off()
        piezo.noTone();
    }
});



