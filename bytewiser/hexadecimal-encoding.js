var nums = process.argv.slice(2).map(Number),
    buff = new Buffer(nums);

console.log(buff.toString('hex'));

