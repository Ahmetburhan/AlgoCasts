
function calculate_nodes(n) {
    if (n == 1) return 1;
    else {
        return Math.pow(2, n) - 1
    }
}


console.log(calculate_nodes(20))
