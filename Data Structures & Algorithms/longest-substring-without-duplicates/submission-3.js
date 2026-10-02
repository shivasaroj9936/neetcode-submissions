class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let len = s.length, maxLength = 0, left = 0;
        const set = new Set();

        for (let right = 0; right < len; right++) {

            while (set.has(s[right])) {

                set.delete(s[left]);
                left++;
            }
            
            set.add(s[right]);
            maxLength = Math.max(maxLength,right-left+1);
        }

        return maxLength;
    }
}
