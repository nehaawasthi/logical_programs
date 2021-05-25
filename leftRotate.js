function rotLeft(a, d) {
    let r = d%(a.length);
    let newArr = a.splice(0,r);
    for(let i=0;i<newArr.length;i++){
        a.push(newArr[i])
    }
    // a.push(newArr);
    return a;
    

}

let arr = [1,2,3,4,5];
let n=4;
//op [5,1,2,3,4]

rotLeft(arr,n)
