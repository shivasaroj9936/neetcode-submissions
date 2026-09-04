class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map={},len=nums.length;

        for(let i=0;i<len;i++){
            const diff = target-nums[i];
            if(diff in map ){
                return [map[diff],i]
            }
            map[nums[i]]=i;
        }
        return [-1,-1];
    }
}


