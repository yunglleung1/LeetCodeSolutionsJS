//given array nums, rotate it to the right by k steps
var rotate = function(nums, k) {
    if((nums.length - k) > 0){
        let splice = nums.splice(nums.length - k);
        nums.unshift(...splice);
    } else{
        k = k % nums.length;
        rotate(nums, k);
    }
};
