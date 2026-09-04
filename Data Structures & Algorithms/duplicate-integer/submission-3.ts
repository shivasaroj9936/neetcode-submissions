class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let len= nums.length;
        let has={};
        for(let i=0;i<len;i++){
            if(has[nums[i]]){
                return true;
            }
            has[nums[i]]=true;
        }
        return false;
    }
}
