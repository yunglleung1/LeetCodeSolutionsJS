//given an array of strings s, reverse it
var reverseString = function(s) {
    let l = 0;
    let r = s.length - 1;

    while(l < r){
        s = swap(s, l, r);
        ++l;
        --r;
    }
};

function swap(c, i, j){
    let item = c[i];
    c[i] = c[j];
    c[j] = item;
    return c;
}
