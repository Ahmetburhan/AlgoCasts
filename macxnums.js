/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function (nums, k) {
    var obj = {};
    // nums.forEach(function(item) {
    //   if (!obj[item])
    //     obj[item] = 1;
    //   else 
    //     obj[item]++;
    // });

    for (let char of nums) {
        if (obj[char]){
            obj[char]++;
    } else {
        obj[char] = 1;
    }
    }
    var arr = [];

    for (var key in obj) {
        arr.push({ key: key, value: obj[key] });
    }

    arr.sort(function (a, b) {
        return b.value - a.value;
    });

    var ans = [];
    for (var i = 0; i < k; i++)
        ans.push(+arr[i].key);

    return ans;
}