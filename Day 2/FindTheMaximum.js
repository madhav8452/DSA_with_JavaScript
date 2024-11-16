let arr = [1,20,43,27,30,45,50]

let max = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
    }
}

console.log(max)
