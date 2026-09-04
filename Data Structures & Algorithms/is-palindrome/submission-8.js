class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let asciiOfA = 'a'.charCodeAt(0);
        let asciiOfZ = 'z'.charCodeAt(0);
        let asciiOf0 = '0'.charCodeAt(0);
        let asciiOf9 = '9'.charCodeAt(0);

        s = s.trim();
        let len = s.length;
        s = s.toLowerCase();

        for (let i = 0,j=len-1; i <= j; i++,j--) {
            while(!((s.charCodeAt(i)>=asciiOfA && s.charCodeAt(i)<= asciiOfZ)||s.charCodeAt(i)>=asciiOf0&&s.charCodeAt(i)<=asciiOf9) && i<len ){
                i++;
            }

             while(!((s.charCodeAt(j)>=asciiOfA && s.charCodeAt(j)<= asciiOfZ)||s.charCodeAt(i)>=asciiOf0&&s.charCodeAt(i)<=asciiOf9) && j>i ){
                j--;
            }
            if (i <= j&& s[i]!=s[j]){
                return false;
            }
        }
        return true;
    }
}
