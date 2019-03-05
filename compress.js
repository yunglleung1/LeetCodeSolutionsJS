//given array of characters (chars), compress it in place 
//into a string representative of the character followed by its string count
var compress = function(chars) {
    if(chars.length > 1) {
        let counter = 1;
        let tempChr = chars.shift();
        let length = chars.length;

        for(let i = 0; i < length; i++){
            if(tempChr !== chars[0]){//if character changes
                if(counter > 1 && counter < 10){
                    chars.push(...[tempChr, counter + ""]);
                } else if(counter > 9){
                    let count = (counter + "").split("");
                    chars.push(...[tempChr, ...count]);
                } else{
                    chars.push(tempChr);
                }
                tempChr = chars.shift();
                counter = 1;
            } else{//else same character
                chars.shift();
                ++counter;
            }

            if(i === length - 1){//if at last character
                if(counter > 1 && counter < 10){
                    chars.push(...[tempChr, counter + ""]);
                } else if(counter > 9){
                    let count = (counter + "").split("");
                    chars.push(...[tempChr, ...count]);
                } else{
                    chars.push(tempChr);
                }
            }
        }
    }
};
