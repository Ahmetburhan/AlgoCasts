var twoSum = function (nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        var curr = nums[i];
        if (map[target - curr] >= 0) {
            map[target - curr]
            console.log(map)

            return [map[target - curr], i]

        } else {
            map[curr] = i;
            console.log(map)

        }
    }
}
let nums = [2,4,6,8]

console.log(twoSum(nums, 10))