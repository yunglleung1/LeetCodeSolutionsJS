//given array A, return an array of A elements with even integers, followed by odds
var sortArrayByParity = function(A) {
    let even = [];
    let odd = [];
    for(let a of A){
        if(!(a % 2)){
            even.push(a);
        }else{
            odd.push(a);
        }
    }

    return [...even, ...odd];

};
