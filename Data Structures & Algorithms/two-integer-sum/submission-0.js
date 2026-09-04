class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const lookUp= new Map();
        const len=nums.length;
        for(let i=0 ;i< len;i++){
            const diff= target-nums[i];
            if(lookUp.has(diff)){
                return [lookUp.get(diff),i]
            }
            lookUp.set(nums[i],i);

        }
        return [-1,-1]
    }
}
