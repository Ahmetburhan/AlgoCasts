/*
 * Complete the function below.
 */
function oddNumbers(l, r) {
    result = [];
    for (i = l; i <= r; i++) {
        if (i % 2 !== 0) {
            result.push(i);
        }
    }
    return result

}

