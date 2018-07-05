/**
 * @param {number[]} prices
 * @return {number}
 */

let prices = [7, 1, 5, 3, 6, 4];

let maxProfit = function (prices) {
    let min = Infinity;
    let max = 0;
    for(let i = 0; i < prices.length -1; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i+1]-min);
    } return max;

};

console.log(maxProfit(prices))
