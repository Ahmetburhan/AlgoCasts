// function fibonacci(n) {
//     fibo = [0,1];
//     for (let i = 2; i <= n; i++){
//         fibo[i] = fibo[i-1] + fibo[i-2]
//     }
//     return fibo[n]
// }

function fib(n) {
    result = [0, 1];
    for (var i = 2; i <= n; i++) {
        const a = result[i - 1];
        const b = result[i - 2];

        result.push(a + b)

    } return result[n]

}

console.log(fib(12))
//if you remove n and you get the full array.
