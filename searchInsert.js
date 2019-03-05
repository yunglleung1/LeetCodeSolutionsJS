//given sorted array of integers, return current (or potential) position of target in array
var searchInsert = function(nums, target) {
    let num;
    for(var i = 0; i < nums.length; i++){
        if(nums[i] === target || nums[i] > target){
           return i;
         }
    }
    return i;
};
