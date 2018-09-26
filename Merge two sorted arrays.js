function mergeArrays(arr1, arr2) {
    let result = [];
    let len = arr1.length + arr2.length;
    let pointer1 = 0;
    let pointer2 = 0;

    for (let i = 0; i < len; i++) {
        let arr1Val = arr1[pointer1] === undefined ? Infinity : arr1[pointer1];

        let arr2Val = arr2[pointer2] === undefined ? Infinity : arr2[pointer2]

        if (arr1Val < arr2Val) {
            result.push(arr1Val)
            pointer1++;
        } else {
            result.push(arr2Val)
            pointer2++
        }
    }
    console.log("result", result)
    return result;
}

console.log(mergeArrays([1, 2, 4], [3, 4, 5, 7]))