/**
 * @param {number[]} nums
 * @return {number}
 */
 //given a sequence of numbers nums,
 //find a subsequence (subarray) with the largest sum & return its sum
var maxSubArray = function(nums) {
    let maxN = slWin(nums, 1);//highest single digit

    for(let i = 2; i < nums.length + 1; i++){//2 to nums.length number of digits
        maxN = Math.max(maxN, slWin(nums, i));
    }
    return maxN;
};

function slWin(c, n){//sliding window
    let tW = 0;
    let maxN;

    for(let i = 0; i < n; i++){
        tW += c[i];
    }

    maxN = tW;

    for(let j = n; j < c.length; j++){
        tW = tW - c[j - n] + c[j];//remove head & add tail

        maxN = Math.max(maxN, tW);
    }

    return maxN;
}
