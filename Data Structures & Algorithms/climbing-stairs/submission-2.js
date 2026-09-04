class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if(n<=0){
            return 0;
        }
        if( n<=2){
            return n;
        }
        return this.climbStairs(n-1)+this.climbStairs(n-2);
    }
}
