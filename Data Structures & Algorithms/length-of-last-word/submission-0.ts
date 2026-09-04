class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s: string): number {
        let len=s.length,count=0;
        for(let i=len-1;i>=0;i--){
            if(s[i]==' ' && count==0){
                continue;
            }
            if(s[i]==' '&&count>0){
                break;
            }
            count++;
        }
        return count;
    }
}
