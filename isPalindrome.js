//given integer x, return true if it is a palindrome, else return false
var isPalindrome = function(x) {
    let dArr = [];
    let dC = digitCount(x);
    if(x >= 0){
        console.log("entered conditional");

        if(dC === 1){
           return true;
        }

        for(let i = dC - 1; i >= 0; i--){
            dArr.push(getDigit(x, i));
        }

        for(let i = 0; i < dArr.length; i++){
            if(dArr[i] !== dArr[dArr.length - (i + 1)]){
               return false;
            }
        }
        return true;
    }
    return false;
};

function getDigit(v, bTP){
    let dP = Math.pow(10, bTP);
    let d = v / dP;
    return Math.floor(d % 10);
}

function digitCount(v){
    if(v === 0){
       return 1;
    }
    let aDC = Math.floor(Math.log10(v));
    return aDC + 1;
}
