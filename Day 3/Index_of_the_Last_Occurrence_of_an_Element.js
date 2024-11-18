let arr = [1, 2, 3, 2, 4];
let target = 2;
let lastIndex = -1;

let ans = []
for(let i = 0; i < arr.length; i++){
    if(arr[i] == target){
        lastIndex = i
    }
}

console.log(lastIndex)