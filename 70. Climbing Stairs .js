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




const climbStairs = function (n) {
    let memo = { 1: 1, 2:2 }
    for (let i= 3; i <= 3; i++){
        memo[i] = memo[i-1] + memo[i -2];
    } return memo[n];
}
console.log(climbStairs(3))
