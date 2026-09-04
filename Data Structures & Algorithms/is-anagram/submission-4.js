class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sCount={},tCount={};
        if(s.length!==t.length){
            return false;
        }
        for( let c of s){
            if(sCount[c]){
                sCount[c]++;
                continue;
            }
            sCount[c]=1;
        }
        for( let c of t){
            if(tCount[c]){
                tCount[c]++;
                continue;
            }
            tCount[c]=1;
        }
        for( let c of t){
            if(tCount[c]!==sCount[c]){
                return false;
            }
        }
        return true;
    }
}
