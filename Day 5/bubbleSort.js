let arr = [7, 10, 4, 3, 20, 15];
let flag = false;

//Method 1

for(let x = 0; x < arr.length; x++){
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] > arr[i + 1]){
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
            flag = true;
        }
    }    
    if(flag == false){
        break;
    }
}

//Method 2

let n = arr.length
do{
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] > arr[i + 1]){
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
            flag = true;    
        }
    }
    n--;
}while(flag && n)

console.log(arr)