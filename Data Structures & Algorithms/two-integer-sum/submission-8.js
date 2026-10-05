class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let len = nums.length,map={};
        for(let i=0;i<len;i++){
            const diff = target - nums[i];
            if(map[diff]!==undefined){
                return [map[diff],i];
            }else{
                map[nums[i]]=i;
            }
        }
        return [-1,-1]
    }
}
