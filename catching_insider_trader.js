function dataCollect(input) {
    let hashMap = {};
    let day;
    let price;
    let rawData = input.split("\n");
    rawData.map(transaction => {
        let trade = transaction.split("|")
        if (trade.length === 2) {
            day = trade[0];
            price = trade[1];
            let transaction = `Trade Day ${trade[0]}`;
            hashMap[transaction] = {};
            hashMap[transaction]["day"] = trade[0];
            hashMap[transaction]["price"] = trade[1];

        } else {
            let brokerInfo = ` Broker: ${trade[1]} @ Day # ${trade[0]}`
            hashMap[brokerInfo] = {};
            hashMap[brokerInfo]["day"] = trade[0];
            hashMap[brokerInfo]["trader"] = trade[1];
            hashMap[brokerInfo]["price"] = price;
            hashMap[brokerInfo]["tradeType"] = trade[2];
            hashMap[brokerInfo]["amount"] = trade[3];
            hashMap[brokerInfo]["transaction_amount"] = (price * trade[3]);

        }
    });
    return hashMap;
}
function pricesAndDates(input) {
    let prices = {};
    let rawData = input.split("\n");
    rawData.forEach(transaction => {
        let trade = transaction.split("|");
        if (trade.length === 2) {
            prices["day"] = trade[0];
            prices["price"] = trade[1];
        }
    })
    return prices;
}
function findPotentialInsiderTraders(input) {
    let hashMap = dataCollect(input);
    let prices = pricesAndDates(input);
    // console.log(Object.values(hashMap));
    // console.log(hashMap)
    let flaggedTrades = "";

    let traders = Object.values(hashMap)
    for(let trade in traders){
        // console.log(traders[trade]["transaction_amount"])
        if (traders[trade]["transaction_amount"] > 500000){
            flaggedTrades += `${traders[trade]["day"]} | ${traders[trade]["trader"]}, ` 
        }
        
    }

    // for (let day in prices) {
    //     let prevDay = day - 1;
    //     let prevPrice = prices[prevDay];
    //     let deltaPrice;
    //     if (day - prevDay <= 3) {
    //         deltaPrice = price = prevPrice;
    //     }
    //     let keyArray = Object.keys(hashMap);
    //     console.log("keyarray here",keyArray)
    //     let potentialTrades = keyArray.filter(el => {
    //         el === day
    //     });
    //     // console.log(potentialTrades)

    //     potentialTrades.forEach(trade => {
    //         if (hashMap[trade][amount] * deltaPrice >= 500000) {
    //             flaggedTrades += `${hashMap[day]} | ${hashMap[trader]} + \n`
    //         }
    //     })
    // }
    return flaggedTrades;
}
console.log(findPotentialInsiderTraders("0|1000\n0|Shilpa|BUY|30000\n0|Will|BUY|50000\n0|Tom|BUY|40000\n0|Kristi|BUY|15000\n1|Kristi|BUY|11000\n1|Tom|BUY|1000\n1|Will|BUY|19000\n1|Shilpa|BUY|25000\n2|1500\n2|Will|SELL|7000\n2|Shilpa|SELL|8000\n2|Kristi|SELL|6000\n2|Tom|SELL|9000\n3|500\n38|1000\n78|Shilpa|BUY|30000\n79|Kristi|BUY|60000\n80|1100\n81|1200"))



// console.log(findPotentialInsiderTraders("0|1000\n0|Shilpa|BUY|30000\n0|Will|BUY|50000\n0|Tom|BUY|40000\n0|Kristi|BUY|15000\n1|Kristi|BUY|11000\n1|Tom|BUY|1000\n1|Will|BUY|19000\n1|Shilpa|BUY|25000\n2|1500\n2|Will|SELL|7000\n2|Shilpa|SELL|8000\n2|Kristi|SELL|6000\n2|Tom|SELL|9000\n3|500\n38|1000\n78|Shilpa|BUY|30000\n79|Kristi|BUY|60000\n80|1100\n81|1200"))

// console.log(findPotentialInsiderTraders("0| 20\n0| Kristi | SELL | 300\n0| Will | BUY | 500\n0| Tom | BUY | 5000\n0| Shilpa | BUY | 150\n1| Tom | BUY | 150000\n3| 25\n5| Shilpa | SELL | 150\n8| Kristi | SELL | 60000\n9|Shilpa | BUY | 50\n10| 15\n11| 5\n14| Will | BUY | 10000\n15| Will | BUY | 10000\n16| Will | BUY |10000\n17| 25"))


// console.log(findPotentialInsiderTraders("0| 20\n0| Kristi | SELL | 300\n0| Will | BUY | 500\n0| Tom | BUY | 5000\n0| Shilpa | BUY | 150\n1| Tom | BUY | 150000\n3| 25\n5| Shilpa | SELL | 150\n8| Kristi | SELL | 60000\n9|Shilpa | BUY | 50\n10| 15\n11| 5\n14| Will | BUY | 10000\n15| Will | BUY | 10000\n16| Will | BUY |10000\n17| 25"))

// 0|1000\n
// 0|Shilpa|BUY|30000\n
// 0|Will|BUY|50000\n
// 0|Tom|BUY|40000\n
// 0|Kristi|BUY|15000\n
// 1|Kristi|BUY|11000\n
// 1|Tom|BUY|1000\n
// 1|Will|BUY|19000\n
// 1|Shilpa|BUY|25000\n
// 2|1500\n
// 2|Will|SELL|7000\n
// 2|Shilpa|SELL|8000\n
// 2|Kristi|SELL|6000\n
// 2|Tom|SELL|9000\n
// 3|500\n
// 38|1000\n
// 78|Shilpa|BUY|30000\n
// 79|Kristi|BUY|60000\n
// 80|1100\n
// 81|1200