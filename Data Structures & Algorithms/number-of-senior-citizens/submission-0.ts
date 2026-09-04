class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details: string[]): number {
        const len=details.length;
        let count=0;
        for(let i=0;i<len;i++){
            const s =details[i];
            if( Number(s.slice(11,13))>60){
                count++;
            }
        }
        return count;
    }
}
