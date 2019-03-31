//given array nums, return true if there are duplicates, else false
var containsDuplicate = function(nums) {
    let fC = {};

    for(let num of nums){
        fC[num] = (fC[num] || 0) + 1;

        if(fC[num] === 2){
            return true;
        }
    }
    return false;
};
