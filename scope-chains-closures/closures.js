function foo() {
    var bar;
    quux = 5;
    function zip() {
        var quux = 3;
        bar = true;
    }
    return zip;
}
