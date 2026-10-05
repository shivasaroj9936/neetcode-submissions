class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        for(let str of strs){
            let sortedString = str.split("").sort().join("");
            if(!map.has(sortedString)){
                map.set(sortedString,[]);
            }
                (map.get(sortedString)).push(str);
            
        }
        return Array.from(map.values());
    }
}
