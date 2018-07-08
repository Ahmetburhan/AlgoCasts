// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */


/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var threeSumClosest = function (nums, target) {
    var result = Number.MAX_VALUE;
    var sum = 0;

    nums.sort(function (a, b) {
        return a - b;
    });
    console.log(nums);

    for (var i = 0; i < nums.length - 2; i++) {
        var j = i + 1;
        var k = nums.length - 1;
        while (j < k) {
            var total = nums[i] + nums[j] + nums[k];
            var disp = target - total;
            if (Math.abs(result) > Math.abs(disp)) {
                result = disp;
                sum = total;
            }
            if (disp > 0) {
                j++;
            } else {
                k--;
            }
        }
    }
    return sum;
};

// console.log(threeSumClosest([1,7,9,5,36,8,9]), 7)
// var threeSumClosest = function (nums, target) {
//     let i, left, right, current, sum;
//     let result = Number.MAX_SAFE_INTEGER;
//     // tampered original
//     nums.sort((a, b) => a - b);
//     // two pointers
//     for (i = 0; i < nums.length; i++) {
//         current = nums[i];
//         left = i + 1;
//         right = nums.length - 1;
//         while (left < right) {
//             sum = current + nums[left] + nums[right];
//             // get the closest sum
//             if (Math.abs(target - sum) < Math.abs(target - result)) {
//                 result = sum;
//             }
//             if (sum < target) {
//                 left++;
//             } else if (sum > target) {
//                 right--;
//             } else {
//                 return sum;
//             }
//         }
//     }
//     return result;
// };
console.log(threeSumClosest([1, 7, 9, 5, 36, 8, 9]), 7)
