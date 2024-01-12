var maxProfit = function (prices) {

    let profit = 0
    let minPrice = Number.MAX_VALUE

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        } else if (prices[i] - minPrice > profit) {
            profit = prices[i] - minPrice
        }

    }
    return profit
};