let maxSub = function (arr) {
    let temp = 0;
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (temp < arr[i]) {
            temp = arr[i]
            console.log(temp)
        } else {
            temp += arr[i]
        } if (temp > maxSum) {
            maxSum = temp
        }
    }
    return maxSum;
}


let arr = [-2, 5, 4, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSub(arr))