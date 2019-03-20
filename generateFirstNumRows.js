//given a numRows, generate the first nuumber of rows of Pascal's triangle
var generate = function(numRows) {
    let rC = 1;//represents row count & row length
    let pTri = [];

    while(rC <= numRows){
        if(rC == 1){
            pTri.push([1]);
        }else if(rC === 2){
            pTri.push([1, 1]);
        }else{
            let prvRow = pTri[(rC - 1) - 1];
            let currRow = [];
            currRow.push(1);
            for(let i = 0; i < prvRow.length - 1; i++){
                currRow.push(prvRow[i] + prvRow[i + 1]);
            }
            currRow.push(1);
            pTri.push(currRow);
        }

        rC++;
    }

    return pTri;

};
