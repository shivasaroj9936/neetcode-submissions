class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums: number[]): number {
        let xor = nums.reduce((acc,cur)=>( acc ^ cur),0);
        let len = nums.length,i=1,sum2=0;

        while(i<=len){
            xor ^=i;
            i++;
        }

        return xor;



    }
}
