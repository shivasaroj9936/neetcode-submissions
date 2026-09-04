class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let map = {},len=nums.length;
        for(let i=0;i<len;i++){
            let complement=target-nums[i];
            if(complement in map){
                return [map[complement],i];
            }
            map[nums[i]]=i;
        }
        return [-1,-1]
    }
}
