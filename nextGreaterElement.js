//given 2 arrays nums1 & nums2, using values of nums1 as index for nums2 values,
//return an array of nums2's greater value (or -1 if it does not exist)
var nextGreaterElement = function(nums1, nums2) {
    let arr = [];
    let counter = 0;
    for(let num1 of nums1){
        for(let i = 0; i < nums2.length; i++){
            if(num1 === nums2[i]){
                for(let j = i; j < nums2.length; j++){
                    if(nums2[j] > nums2[i]){
                        arr.push(nums2[j]);
                        break;
                    }
                }
            }
        }
        if(!arr[counter]){
            arr.push(-1);
        }
        ++counter;
    }
    return arr;
};
