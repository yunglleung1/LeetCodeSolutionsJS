/**
 * @param {string} s
 * @return {number}
 */
 //given string s, return 1st unique character in s, else return -1
var firstUniqChar = function(s) {
    let fC = {};

    for(let chr of s){
        fC[chr] = (fC[chr] || 0) + 1;
    }

    let counter = 0;
    for(let chr of s){
        if(fC[chr] === 1){
            return counter;
        }
        ++counter;
    }

    return -1;
};
