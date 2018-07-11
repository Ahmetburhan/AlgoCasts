let nums = [1,1,2,2,3,4,5,6,7]
/**
 * @param {number[]} nums
 * @return {number[]}
 */
let findDisappearedNumbers = function (nums) {
    let m = new Map();
    for (let i = 1; i <= nums.length; ++i) { m.set(i, 0); }
    for (let i of nums) { m.delete(i); }
    return Array.from(m.keys());
};

console.log(findDisappearedNumbers(nums))