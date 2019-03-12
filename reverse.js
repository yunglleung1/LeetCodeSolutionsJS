//given integer x, reverse its digits
var reverse = function(x) {
    let strVal = x + "";
    let arrVal = strVal.split("");
    let length = arrVal.length;

    while(arrVal[length - 1] === '0' && length > 1){
        arrVal.pop();
        length = arrVal.length;
    }

    let revStrVal = "";
    for(let i = 0; i < length; i++){
        revStrVal += arrVal.pop();
    }

    let val = parseInt(revStrVal);
    let upperLimit = Math.pow(2, 31) - 1;
    let lowerLimit = 0 - Math.pow(2, 31);

    if(x > 0 && val < upperLimit){
        return val;
    } else if(x < 0 && 0 - val > lowerLimit){
        return 0 - val;
    } else{
        return 0;
    }
};
