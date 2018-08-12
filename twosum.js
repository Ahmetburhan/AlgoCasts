let arr = [2, 7, 11, 15]
let target = 9


function twoSum(arr, target) {
    let cache = {};
    for (let i = 0; i < arr.length; i++) {
        let curr = arr[i];
        let second = target - curr;
        cache[curr] = curr
        // console.log(cache)
        if (cache[second] !== undefined) {
            return [cache[second], i]
        } else {
            cache[curr] = i
        }
    }
}

console.log(twoSum(arr, target))