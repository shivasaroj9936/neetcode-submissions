class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
     let minPrice=Infinity,maxProfit = 0;
     for(let price of prices){
      if(minPrice>price){
        minPrice = price;
      }
      maxProfit = Math.max(maxProfit,price-minPrice);
     }
     return maxProfit;
    }
}
