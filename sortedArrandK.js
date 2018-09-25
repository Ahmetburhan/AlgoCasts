let arr = [1, 2, 3, 4, 4, 4, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 9, 9, 9, 9]


let checker = function (arr, k) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === k) {
            count++
        } else if (arr[i] > k) {
            console.log(arr[i])
            return count
        }
    }
    return (count == 0) ? false : count;
}

console.log(checker(arr, 3))