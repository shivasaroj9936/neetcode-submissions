class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
      let minPrice=Infinity,maxProfit=0;

      for(let price of prices){
        if(price<minPrice){
            minPrice = price;
        }
        maxProfit = Math.max(price-minPrice,maxProfit);
      }
      return maxProfit;
    }
}
