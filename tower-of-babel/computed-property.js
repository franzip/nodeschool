console.log({
    [(+process.argv[2] % 2 ? 'odd' : 'even')]: +process.argv[2],
    [(+process.argv[3]) + (+process.argv[2])]: (+process.argv[3]) + (+process.argv[2])
});
