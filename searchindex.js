/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let searchInsert = function (nums, target) {

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            console.log("found the number")
            return nums[i]
        } else if (!nums.includes(target)) {
            console.log("cant found the number returning target")
            return target;
        }
    }

}

let nums = [1, 3, 5, 6]


searchInsert(nums, 7)