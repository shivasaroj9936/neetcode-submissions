class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let freq={};
        for(let num of nums){
            if(freq[num]!=undefined){
                return true;
            }
            freq[num]=1;
        }
        return false
    }
}
