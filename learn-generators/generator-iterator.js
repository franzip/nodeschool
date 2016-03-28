function *factorial(n){
    var num = 1;
    for (var i = 1; i <= n; i++) {
        num *= i;
        yield(num);
    }
}

for (var n of factorial(5)) {
  console.log(n);
}
