module.exports = scenario;

function scenario(t) {
    t.ok(isgreaterthanzero(Infinity), "1 is greater than 0");
    t.ok(isgreaterthanzero(1), "1 is greater than 0");
    t.notok(isgreaterthanzero(0), "0 *is* 0, not greater than 0");
    t.notok(isgreaterthanzero(-0), "why does -0 exist");
    t.notok(isgreaterthanzero(-1), "-1 is definitely not greater than 0");
    t.notok(isgreaterthanzero(-Infinity), "-infinity is definitely not greater than 0");

    function isgreaterthanzero(value) { return value > 0; }
}
