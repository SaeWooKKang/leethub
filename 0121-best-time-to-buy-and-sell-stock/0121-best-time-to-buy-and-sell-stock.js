/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minValue = prices[0]
    let profit = 0

    prices.slice(1).forEach(price => {
        if (profit < price - minValue) {
            profit = price - minValue
        }
        if (minValue > price) {
            minValue = price
        }
    })

    return profit
};