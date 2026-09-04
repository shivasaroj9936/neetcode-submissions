class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const mp= new Map();
        for(let s of strs){
            const sortedString= s.split('').sort().join('');

            if(!mp.has(sortedString)){
                mp.set(sortedString,[]);
            }
            mp.get(sortedString).push(s);
        }
        return Array.from(mp.values());
    }
}
