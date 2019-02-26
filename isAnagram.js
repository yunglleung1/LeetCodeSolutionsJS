/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 //given strings s & t, return true is t is an anagram of s, else return false
var isAnagram = function(s, t) {
    let fCS = {};
    let fCT = {};
    if(s.length > 1  && t.length > 1 && s.length === t.length ){
        for(let i = 0; i < s.length; i++){
           fCS[s[i]] = (fCS[s[i]] || 0) + 1;
           fCT[t[i]] = (fCT[t[i]] || 0) + 1;
        }

        let keysS = Object.keys(fCS);

        for(let key of keysS){
            if(fCS[key] !== fCT[key]){
               return false;
            }
        }
        return true;
    } else if(s.length <= 1  && t.length <= 1){
        if(s === t){
            return true;
        }
    }
    return false;
};
