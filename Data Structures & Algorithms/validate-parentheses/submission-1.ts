class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = [];
        if (s.length % 2 !== 0) return false;
        for (let ch of s) {
            if (ch == '(' || ch == '{' || ch == '[') {
                stack.push(ch);
            } else {
                let lastChar = stack.pop();
                if ((ch == ")" && lastChar == "(") || (ch == "}" && lastChar == "{") || (ch == "]" && lastChar == "[")) {
                    continue;
                } else {
                    return false;
                }
            }


        }
        return stack.length==0;
    }
}
