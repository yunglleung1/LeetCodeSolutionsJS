//given string ransomNote, return true if it can be constructed using string magazine,
//else return false 
var canConstruct = function(ransomNote, magazine) {
    let fC = {};
    for(let chr of magazine){
        fC[chr] = (fC[chr] || 0) + 1;
    }

    for(let chr of ransomNote){
        if(fC[chr]){
           fC[chr] = fC[chr] - 1;
        }else{
            return false;
        }
    }

    return true;
};
