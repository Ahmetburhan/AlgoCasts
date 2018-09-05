let stocks = [7, 1, 5, 3, 6, 4];

function buyStock(arr) {
    let i = 0;
    let j = 1;
    let maxProfit = 0;
    for (j; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
            i = j;
        } else {
            maxProfit = Math.max(maxProfit, arr[j] - arr[i])
        }
    }
    return maxProfit;
}


console.log(buyStock(stocks))