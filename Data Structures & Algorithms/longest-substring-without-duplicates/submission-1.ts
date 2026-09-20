class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {

        let len = s.length, maxLength = 0, st = new Set(),left=0;

        for (let right = 0; right < len; right++) {
           
           while(st.has(s[right])){
            st.delete(s[left]);
            left++;
           }

            st.add(s[right]);
            maxLength = Math.max(maxLength,right-left+1);

        }
        return maxLength;

        // abbcdfre

        // st-> bc
        // left-> 2
        // right-> 3
        // maxLen=2
    }
}
