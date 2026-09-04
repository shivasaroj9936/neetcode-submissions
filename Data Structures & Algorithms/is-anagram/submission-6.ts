class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const count = new Array(26).fill(0),len=s.length;
        if(s.length!==t.length)
            return false;

        for(let i=0; i<len; i++){
            count[s.charCodeAt(i)-97]++;
            count[t.charCodeAt(i)-97]--;
        }
        for(let num of count){
            if(num!==0)
            return false;   
        }
        return true;
    }

}
