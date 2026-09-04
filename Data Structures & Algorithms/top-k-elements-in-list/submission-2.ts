class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        let map={};
        for(let num of nums ){
            map[num] = (map[num]||0)+1;
        }

      return Object.entries(map)
        .sort((a,b)=>(Number(b[1])-Number(a[1])))
        .slice(0,k)
        .map(([num])=>Number(num));
    }
}
