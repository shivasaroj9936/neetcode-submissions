class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n: number): number[] {
        const ans = [];
        for(let i=0;i<=n;i++){
            let count = 0, current = i;
            while(current){
                if(current&1){
                    count++;
                }
                current>>=1;
            }
            ans.push(count);
        }
        return ans;
    }
}
