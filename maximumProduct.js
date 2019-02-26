/**
 * @param {number[]} nums
 * @return {number}
 */
//given integer array nums, return the maximum product of three numbers
var maximumProduct = function(nums) {
    let numsSorted = nums.sort((a, b) => {
        return a - b;
    });
    let last = nums.length - 1;
    let secondToLast = last - 1;
    let thirdToLast = secondToLast  - 1;

    let topPositive = numsSorted[last] * numsSorted[secondToLast] * numsSorted[thirdToLast];
    let topNegative = numsSorted[0] * numsSorted[1] * numsSorted[last];

    return Math.max(topPositive, topNegative);
};
