class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {

        if(n<=3){
            return n;
        }
        let a=0,b=1,sum=0
        while(n>0){
            n--;
            sum=a+b;
            a=b;
            b=sum;
            
        }
        return sum;
    }
}

// 0 -0
// 1-1
// 2-2
// 3-3
// 4-1,1+1+2,2+1+1,1+2+1,


// 4-1


