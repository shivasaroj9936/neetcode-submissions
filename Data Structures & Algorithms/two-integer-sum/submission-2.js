class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let len=nums.length;
        for(let i=0;i<len;i++){
            let diff=target-nums[i];
            for(let j=i+1;j<len;j++){
                if(nums[j] === diff){
                    return [i,j]
                }
            }
        }
        return []
    }
}
