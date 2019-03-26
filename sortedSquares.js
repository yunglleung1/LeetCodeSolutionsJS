//given integers array A, return its square values in increasing order
var sortedSquares = function(A) {
    let c = 0;

    let square;

    for(let num of A){
        A[c] = num * num;
        c++;
    }

    return A.sort((a, b) => {
        return a - b;
    });
};
