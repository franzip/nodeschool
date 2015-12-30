var nums = Array.prototype.slice.call(process.argv, 2).map(Number),
    res  = nums.reduce(function(a, b) {
        return a + b;
    }, 0);

console.log(res);

