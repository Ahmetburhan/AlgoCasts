/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        map.push(nums[i]);
    } return map;

};

let nums =[2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums))