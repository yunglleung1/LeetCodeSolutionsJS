//given an array of prices, return maximum profit from a single transaction
var maxProfit = function(prices) {
    let buy, sell;
    let maxProfit = 0;
    for(let i = 0; i < prices.length; i++){
        buy = prices[i];
        for(let j = i + 1; j < prices.length; j++){
            sell = prices[j];
            maxProfit = Math.max(maxProfit, sell - buy);
        }
    }
    return maxProfit;
};
