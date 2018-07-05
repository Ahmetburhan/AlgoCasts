/**
 * @param {number} n
 * @return {number}
 */
// const climbStairs = n => {
//     let memo = { 1: 1,
//                  2: 2 };

//     for (let i = 3; i <= n; i++) {
//         memo[i] = memo[i - 1] + memo[i - 2];
//     }
//     return memo[n];
// }




// const climbStairs = (n)=> {
//     let memo = { 1 : 1, 2 : 2 }
//     for (let i= 3; i < 3; i++){
//         memo[i] = memo[i-1] + memo[i -2];
//         console.log(memo[n])
//     } return memo[n];
// }

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
       let nums = { 1 : 1, 2 : 2 }

        for (let i = 3; i <= n; i++) {
            nums[i] = nums[i - 1] + nums[i - 2];
        }
        return nums[n]
    }
console.log(climbStairs(5))
