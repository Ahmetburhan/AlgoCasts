/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    const map = {};
    map[0] = 1;
    let count = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (map[sum - k]) {
            count += map[sum - k]
        }
        const currentSum = map[sum]
        if (currentSum) {
            map[sum] = currentSum + 1
        } else {
            map[sum] = 1
        }
    }
    console.log(map)
    return count

};

let nums = [1, 1, 1], k = 2;

console.log(subarraySum(nums, k))