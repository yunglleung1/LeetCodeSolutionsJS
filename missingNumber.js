//given array of distinct numbers in random order, return its missing number
var missingNumber = function(nums) {
    let max = 0;
    numsObj = {};

    for(let num of nums){
        numsObj[num] = true;
        max = Math.max(max, num);
    }

    for(let i = 0; i < max; i++ ){
        if(!numsObj[i]){
           return i;
        }
    }
    return max + 1;
};
