function buyStock(arr) {
    let buy = 0;
    let sell = 1;
    let maxProfit = 0;

    for (sell; sell < arr.length; sell++) {
        if (arr[sell] < arr[buy]) {
            buy = sell;
        } else {
            maxProfit = Math.max(maxProfit, arr[sell] - arr[buy])
        }
    }

    return maxProfit;
}


console.log(buyStock([]))