class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums: number[]): number {
        let sum1 = nums.reduce((acc,cur)=>(acc+cur),0);
        let len = nums.length,i=1,sum2=0;

        while(i<=len){
            sum2+=i;
            i++;
        }

        return Math.abs(sum1-sum2);



    }
}
