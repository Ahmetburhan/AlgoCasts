/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */



var twoSum = function (nums, target) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        console.log(map)
        let curr = nums[i];
        if (target - curr in map) {
            return [map[target - curr], i]
        } else {
            map[curr] = i
        }
    }

}


// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


let nums = [2, 5, 9, 15, 4];
let target = 9;

twoSum(nums, target)