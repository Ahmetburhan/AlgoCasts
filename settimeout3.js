let delay = function (n, delay = 1000) {
    for (let i = 0; i <= n; i++) {
        // (function (i) {
        // setTimeout(() => {
        // console.log(i)
        // }, i * delay);
        // })(i);
        setTimeout(() => {
            return console.log(i);
        }, i * delay)

    }
}
console.log(delay(5, 2000))
