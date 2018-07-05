/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    var ary = [];
    nums.sort(function (a, b) {
        return a - b;
    });

    for (var i = 0; i < nums.length; i++) {
        var a = nums[i];
        j = i + 1;
        k = nums.length - 1;
        if (i > 0 && (nums[i] == nums[i - 1])) {
            continue;
        } else {
            while (j < k) {
                var b = nums[j];
                var c = nums[k];
                var sum = a + b + c;
                if (sum == 0) {
                    var subAry = [a, b, c];
                    subAry.sort(function (a, b) {
                        return a - b;
                    });
                    ary.splice(ary.length, 0, subAry);
                    while ((nums[j] == nums[j + 1])) {
                        j++;
                    }
                    j++;
                } else if (sum > 0) {
                    k--;
                } else {
                    j++;
                }
            }
        }
    }
    return ary;
}