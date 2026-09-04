class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s: string, t: string): boolean {
        let len1=s.length,len2=t.length,prevIndex=-1,ans="";
        for(let i=0;i<len1;i++){
            for(let j=prevIndex+1;j<len2;j++){
                if(s[i]==t[j] && j>prevIndex){
                    prevIndex=j;
                    ans+=t[j];
                    break;
                }
            }
        }
        return ans==s;
    }
}
