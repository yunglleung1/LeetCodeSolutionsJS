//given array nums, move all 0's to the end of it while maintaining
//relative order of non-zero elements
var moveZeroes = function(nums) {
    let pS;

    for(let r = nums.length; r > 0; r--){
        pS = false;

        for(let i = 0; i < r - 1; i++){
            if(nums[i] === 0 && i + 1 < r){
               swap(nums, i, i + 1);
                pS = true;
            }
        }
        if(!pS){
            break;
        }
    }
    return nums;
};

function swap(c, i, j){
    let item = c[i];
    c[i] = c[j];
    c[j] = item;
}
