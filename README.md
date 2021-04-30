# logical_programs

## check anagram array

 function checkAnagram(arr){
  var str = arr[0];
  var c =1
for(let i = 1 ; i < arr.length ; i++){
var sortString = arr[i].split('').sort().join('');
  if(sortString == str){
 c++;
}
}
  if(c== arr.length){
    return true;
  }
  else{
    return false;
  }  
}

console.log(checkAnagram(['abcd','dcba','abcd','abcd']));
