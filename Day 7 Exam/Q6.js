let arr = [6, 3, 8, 5, 2]
let swap = 0;
let flag = false;

for(let x = 0; x < arr.length; x++){
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] > arr[i + 1]){
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
            flag = true;
            swap++;
        }
    }    
    if(flag == false){
        break;
    }
}

console.log(arr)
console.log("Swap =", swap)