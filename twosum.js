let arr = [2, 7, 11, 15, 0, 9]
let target = 9


function twoSum(arr, target) {
    let cache = {};
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i];
        let second = target - curr;
        cache[curr] = i
        console.log(cache)
        if (arr.includes(second)) {
            result.push([curr,second])

        } 
    } return result
}

console.log(twoSum(arr, target))