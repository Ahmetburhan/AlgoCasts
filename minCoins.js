// function minCoinChange(n, coins) {
//   let cache = {};
//   function subtractCoins(num) {
//     if(cache[num] !== undefined) {
//       return cache[num];
//     }
//     if(num === 0) {
//       return 0;
//     }
//     let minCoins = Infinity;
//     for(let i = 0; i < coins.length; i++) {
//       if((num - coins[i]) >= 0) {
//         minCoins = Math.min(minCoins, subtractCoins(num - coins[i]));
//       }
//     }
//     cache[num] = minCoins + 1;
//     return minCoins + 1;
//   }
//   return subtractCoins(n);
// }



function minCoinChange(num, coins) {
    let table = [0];
    for (let i = 1; i <= num; i++) {
        let minCoins = Infinity;
        for (let coin = 0; coin < coins.length; coin++) {
            let currentCoin = coins[coin];
            if ((i - currentCoin) >= 0) {
                minCoins = Math.min(minCoins, table[i - currentCoin])
            }
        }
        table.push(minCoins + 1);
    }
    return table[num];
}

minCoinChange(11, [5, 8, 9, 1])