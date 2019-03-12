//return index of 1st occurrence of string needlein string haystack 
var strStr = function(haystack, needle) {
    let n = needle.length;

    let arrHS = haystack.split("");
    let tW = "";

    for(let i = 0; i < n; i++){
        tW += arrHS[i]
    }

    for(let j = n; j < arrHS.length + 1; j++){//arrHS.length + 1 to include last chr
        if(tW === needle){
            return j - n;
         } else{
            tW = tW.slice(1, n) + arrHS[j];
         }
    }

    //edge cases
    if(haystack === "" && needle !== "" || haystack !== "" && needle === ""){
       return -1 ;
    } else if (haystack === "" && needle === "" || haystack === needle) {
        return 0;
    } else {
        return -1;
    }

};
