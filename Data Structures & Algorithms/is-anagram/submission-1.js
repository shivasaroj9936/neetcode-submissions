class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length){
            return false;
        }
        const sMap= new Map();
        const tMap = new Map();
        for(let i=0;i<s.length;i++){
            let sChar=s[i];
            if(sMap.has(sChar)){
                sMap.set(sChar,sMap.get(sChar)+1);
            }else{
                sMap.set(sChar,1);
            }
            let tChar=t[i];
            if(tMap.has(tChar)){
                tMap.set(tChar,tMap.get(tChar)+1);
            }else{
                tMap.set(tChar,1);
            }
        }
    console.log(sMap,tMap);
        for(let ch of s){
            if(sMap.get(ch)!==tMap.get(ch)){
                return false;
            }
        }
        return true;

    }
}
