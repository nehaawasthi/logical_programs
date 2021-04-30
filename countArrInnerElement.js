//Count the array of element which have an inner array
// Count items of array [1,2,3,4,[5,6,7,8],9,10,11,[12],[13]]

var arr = [1,2,3,4,[5,6,7,8],9,10,11,[12],[13]];
function countArrElements(arr){
  var sum = 0;
  for(let i=0; i<arr.length; i++){
    if(Array.isArray(arr[i])){
      sum +=countArrElements(arr[i]);
    }
    else{
      sum++;
    }
  }
  return sum;
}
countArrElements(arr);
