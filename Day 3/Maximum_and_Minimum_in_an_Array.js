let arr = [3, 7, 1, 5, 9, 0, 2];
let max = 0;
let min = Infinity;

for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
    else if(arr[i] < min){
        min = arr[i];
    }
}

console.log("Maximum:", max)
console.log("Minimum:", min)