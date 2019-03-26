//given string s, find the character that was added to s to make string t
var findTheDifference = function(s, t) {
    let fC = {};

    for(let chr of s){
        fC[chr] = (fC[chr] || 0) + 1;
    }

    for(let chr of t){
        if(fC[chr]){
           fC[chr] = fC[chr] - 1;
        }else{
            return chr;
        }
    }
};
