//given list A & list B (anagram of A), return a mapping A elements in B list
var anagramMappings = function(A, B) {
    let cB = {};
    let c = 0;
    for(let b of B){
        cB[b] = c;
        c++;
    }

    let p = [];

    for(let a of A){
        p.push(cB[a]);
    }

    return p;
};
