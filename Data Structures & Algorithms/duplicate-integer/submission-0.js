class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const mp = new Map();

       for(const num of nums){
        if(mp.has(num)) {return true;}
        mp.set(num,1)
       }
       
        return false;
    }
}
