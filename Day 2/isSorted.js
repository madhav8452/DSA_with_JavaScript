// Find if array is Accending or Descending order 
// Output in boolean True or False

// without Function 

let arr = [2,4,5,7,8,9,10,25,51];
let flag = true;

for(let i = 0; i < arr.length; i++){
    if(arr[i] > arr[i + 1]){
        flag = false;
        break;
    }
}

console.log("Without Function:", flag);

// With using Function 

function isSorted(){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[i + 1]){
            return false;
        }
    }
    return flag;
}

console.log("With Function:", isSorted())