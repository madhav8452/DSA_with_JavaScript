let arr = [-1,-39,-45,-32,-2,0]

let max = -Infinity;

for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
}

console.log(max);