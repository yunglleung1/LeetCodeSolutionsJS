//given array of integers (nums), return indices of 2 numbers that sum up to target
var twoSum = function(nums, target) {

    let num;
    for(let i = 0; i < nums.length; i++){
        num = nums[i];
        for(let j = i + 1; j < nums.length; j++){
            if(num + nums[j] === target){
                return [i, j];
            }
        }
    }
};
