class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s: string): number {
        let sum=0,len=s.length;
        for(let i=0,j=1;j<len;j++,i++){
            sum+=  Math.abs(s.charCodeAt(j)-s.charCodeAt(i));
        }
        return sum;
    }
}
