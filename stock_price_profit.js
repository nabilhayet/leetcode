var maxProfit = function (prices) {

    // [11,9,7, 3,5, 3,2,1]
    let result = 0;
    let min = prices[0];

    for (let i = 1; i < prices.length; i++) {
        min = Math.min(prices[i], min);
        result = Math.max(result, prices[i] - min);
    }

    return result;
};