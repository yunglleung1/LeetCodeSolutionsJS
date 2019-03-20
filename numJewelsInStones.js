//given a string of unique jewel types (J) & your string of stone collection, 
//return a count of stones that are jewels
var numJewelsInStones = function(J, S) {
    let stoneCounter = {}
    let jewelCounter = 0;

    for(let s of S){
        stoneCounter[s] = (stoneCounter[s] || 0) + 1;
    }

    for(let j of J){
        if(stoneCounter[j]){
            jewelCounter = jewelCounter + stoneCounter[j]
        }
    }
    return jewelCounter;
};
