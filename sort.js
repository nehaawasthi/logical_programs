//complexity O(n) first logic for program to sort 0,1,2
function sort012(a,arr_size)
    {
         
        let lo = 0;
        let hi = arr_size - 1;
        let mid = 0;
        let temp = 0;
        while (mid <= hi)
        {
            if(a[mid] == 0)
            {
                temp = a[lo];
                a[lo] = a[mid];
                a[mid] = temp;
                lo++;
                mid++;
            }
            else if(a[mid] == 1)
            {
                mid++;
            }
            else
            {
                temp = a[mid];
                a[mid] = a[hi];
                a[hi] = temp;
                hi--;
            }
             
        }
        return a;
    }
var arr = [0,0,1,1,0,2,1,0,2,1,1,0,0];
console.log(sort012(arr,arr.length));

//second logic

function sort01(arr){
    var newArr =[];
    var countZero =0 ;
    var countOne ;
    for(var i =0; i<arr.length; i++){
        if(arr[i]==0){
            newArr.push('0')
            countZero++;
        }
    }
    countOne = arr.length - countZero;
    for(let k =0;k<countOne;k++){
        newArr.push(1);
    }
    return newArr
}
console.log(sort01([0,1,1,1,0,0,0,1,0,1,1]));

//output [0,0,0,0,0,1,1,1,1,1,1]