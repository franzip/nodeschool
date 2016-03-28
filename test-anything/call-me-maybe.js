var test           = require('tape'),
    repeatCallback = require(process.argv[2]);

test('repeatCallback', function(t) {
    t.plan(3);
    repeatCallback(3, function() {
        t.pass('cb called');
    });
});
