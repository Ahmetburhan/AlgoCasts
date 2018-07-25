/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if(!map[nums[i]]){
            map[nums[i]] = 1;
        } else {
            map[nums[i]] += 1;
        }
        for (key in map){
            if(map[key] >= Math.round(nums.length /2)){
                return parseInt(key);
            }
        }
}
}

let arr =[2, 2, 1, 1, 1, 2, 2];
    console.log(majorityElement(arr))