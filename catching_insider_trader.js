function parseData(datafeed) {
    let tradeHash = {};
    let day;
    let price;
    let rawData = datafeed.split("\n");
    rawData.map(transaction => {
        let trade = transaction.split("|")
        if (trade.length === 2) {
            day = trade[0];
            price = trade[1];
            let dayAndTrader = ` Broker: Anonymous @ Day # ${trade[0]}`;
            tradeHash[dayAndTrader] = {};
            tradeHash[dayAndTrader]["day"] = trade[0];
            tradeHash[dayAndTrader]["trader"] = trade[1];


        } else {
            let dayAndTrader = ` Broker: ${trade[1]} @ Day # ${trade[0]}`
            tradeHash[dayAndTrader] = {};
            tradeHash[dayAndTrader]["day"] = trade[0];
            tradeHash[dayAndTrader]["trader"] = trade[1];
            tradeHash[dayAndTrader]["price"] = price;
            tradeHash[dayAndTrader]["tradeType"] = trade[2];
            tradeHash[dayAndTrader]["amount"] = trade[3];
        }
    });
    return tradeHash;
}

function pricesAndDates(datafeed) {
    let prices = {};
    let rawData = datafeed.split("\n");
    rawData.map(transaction => {
        let trade = transaction.split("|");
        if (trade.length === 2) {
            prices["day"] = trade[0];
            prices["price"] = trade[1];
        }
    })
    return prices;
}

function findPotentialInsiderTraders(datafeed) {
    let tradeHash = parseData(datafeed);
    let prices = pricesAndDates(datafeed);
    // console.log(prices);
    // console.log(tradeHash)
    let flaggedTrades = "";
    for (let day in prices) {
        let prevDay = day - 1;
        let prevPrice = prices[prevDay];
        let deltaPrice;
        if (day - prevDay <= 3) {
            deltaPrice = price = prevPrice;
        }
        let keyArray = Object.entries(tradeHash);
        console.log("keyArray",keyArray)
        // let potentialTrades = keyArray.filter(el => {
        //    return el === day
        // });
        // console.log("potentialTrades",potentialTrades)

        console.log("here is the day",day)
        keyArray.map(trade => {
            console.log("each trade here", trade[0],trade)
            // if (tradeHash[trade]["amount"] * deltaPrice >= 500000) {
            //     flaggedTrades += `${tradeHash[day]} | ${tradeHash[trader]} + \n`
            // }
        })
    }
    return flaggedTrades;
}

console.log(pricesAndDates("0|1000\n0|Shilpa|BUY|30000\n0|Will|BUY|50000\n0|Tom|BUY|40000\n0|Kristi|BUY|15000\n1|Kristi|BUY|11000\n1|Tom|BUY|1000\n1|Will|BUY|19000\n1|Shilpa|BUY|25000\n2|1500\n2|Will|SELL|7000\n2|Shilpa|SELL|8000\n2|Kristi|SELL|6000\n2|Tom|SELL|9000\n3|500\n38|1000\n78|Shilpa|BUY|30000\n79|Kristi|BUY|60000\n80|1100\n81|1200"))


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