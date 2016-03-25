var args = process.argv.slice(2);

console.log(`The minimum of [${args}] is ${Math.min(...args)}`);
