let nums = [1,1,2,2,3,4,5,6,7]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    let hash = {};
    let result = [];
    for (let i=0; i<nums.length; i++){
        if(hash[nums[i]]){
            result.push(nums[i]);
        } else {
            hash[nums[i]] = nums[i];
        }
    } return result;
}




// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var findDuplicates = function (nums) {
//     let hash = {};
//     let result = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (hash[nums[i]]) {
//             result.push(nums[i]);
//         } else {
//             hash[nums[i]] = nums[i];
//         }
//     } return result;
// }


///longer time 
// let findDuplicates = function (nums) {
//     let map = [];
//     let duplicates = [];

//     for (let i=0; i< nums.length; i++) {
//         if (!map.includes(nums[i])){
//             map.push(nums[i])
//         } else {
//             duplicates.push(nums[i])
//         }
//     } return duplicates;
// } 


// console.log(findDuplicates(nums))

///better time 
// let findDuplicates = function (nums) {
//     let res = [];
//     for (let num of nums) {
//         if (nums[Math.abs(num)-1] < 0) {
//             res.push(Math.abs(num))
//             console.log(res.push(Math.abs(num))
// )
//         } else {
//             nums[Math.abs(num)-1] *= -1
//         }
//     } return res;
// }


console.log(findDuplicates(nums))