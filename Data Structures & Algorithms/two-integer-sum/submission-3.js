class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map={},len=nums.length;
        for(let i=0;i<len;i++){
            let diff=target-nums[i];
            if(map[diff]!==undefined){
                return [map[diff],i]
            }

            map[nums[i]]=i;
        }
        return [];
    }
}
