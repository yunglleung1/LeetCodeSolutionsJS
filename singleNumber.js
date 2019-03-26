//given array nums, return the num that appears once
var singleNumber = function(nums) {
    let fC = {};

    for(num of nums){
        fC[num] = (fC[num] || 0) + 1;
    }

    for(let num in fC){
        if(fC[num] === 1){
            return num;
        }
    }
};
