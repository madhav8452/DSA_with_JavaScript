let arr = [1,2,3]

function reverseArray(arr){
    let a = [];

    for(let i = arr.length - 1; i >= 0; i--){
        a.push(arr[i]);
    }    
    
    return a;
}

console.log(reverseArray(arr))