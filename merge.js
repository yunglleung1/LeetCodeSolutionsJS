//given two arrays (nums1 & nums 2) merge them
var merge = function(nums1, m, nums2, n) {//m & n are counts of elements initilized in nums1 & nums2
    let i = 0;
    let j = 0;
    let mR = [];

    //removes trailing zeros in accordance to n
    while(n > 0 && nums1[nums1.length -1] === 0){
        nums1.pop();
        n--;
    }

    while(i < nums1.length && j < nums2.length){
        if(nums1[i] < nums2[j]){
            mR.push(nums1[i]);
            i++;
        } else{
            mR.push(nums2[j]);
            j++;
        }
    }

    while(i < nums1.length){
        mR.push(nums1[i]);
        i++;
    }

    while(j < nums2.length){
        mR.push(nums2[j]);
        j++;
    }

    //because tests require not return anything, modify nums1 in-place instead
    while(nums1.length){
        nums1.pop();
    }

    while(mR.length){
        nums1.push(mR.shift());
    }
};
