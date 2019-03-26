//given string s, return the reverse of the order of each word in s
var reverseWords = function(s) {
    let sArr = s.split(" ");

    let revStr = "";
    let revWord;
    for(let word of sArr){
        revWord = word.split("").reverse().join("");

        if(!revStr.length){
            revStr = revWord;
        } else{
            revStr += " " + revWord;
        }
    }

    return revStr;
};
