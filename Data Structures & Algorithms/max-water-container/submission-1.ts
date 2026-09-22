class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0,right = heights.length-1,maxWater=0;

        while(left<right){
            let water = (right -left) * Math.min(heights[left],heights[right]);
            maxWater = Math.max(maxWater,water);
            if(heights[left]<heights[right]){
                left++;
            }else{
                right--;
            }
        }

        return maxWater;
    }
}
