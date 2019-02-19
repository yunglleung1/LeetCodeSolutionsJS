//given mountain array A, return index of highest value
var peakIndexInMountainArray = function(A) {
    let num = A[0];
    let idx = 0;
    let uptick = false;

  for(let i = 0; i < A.length; i++){
      if(A[i] > num){
          num = A[i];
          idx = i;
          uptick = true;
      } else if(uptick && A[i] < num){
          break;
      }
  }
  return idx;
};
