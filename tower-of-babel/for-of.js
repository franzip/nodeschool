function fizzBuzzValue(value) {
    return (value % 15 === 0) ? 'FizzBuzz' :
           (value % 3 === 0) ? 'Fizz' :
           (value % 5 === 0) ? 'Buzz' :
            value;
}

const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    // here belongs the FizzBuzz logic
    // Hint：
    // When it's finished you have to return an object
    // with the property `done: true` but before you
    // have to set `done: false`
    let num = 0;
    return {
        next() {
            if (num < max) {
                return { done: false, value: fizzBuzzValue(++num) };
            }
            return { done: true };
        }
    };
  }
};

for (var n of FizzBuzz) {
    console.log(n);
}
