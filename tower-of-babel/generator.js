let fibonacci = function*(){
    let num = 0,
        max = process.argv[2],
        value = num;
    while (num < max) {
        value = fizzBuzzValue(++num);
        yield value;
    }
}();

for (var n of fibonacci) {
  console.log(n);
}

function fizzBuzzValue(value) {
    return (value % 15 === 0) ? 'FizzBuzz' :
           (value % 3 === 0) ? 'Fizz' :
           (value % 5 === 0) ? 'Buzz' :
            value;
}


