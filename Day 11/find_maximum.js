let arr = [2, 1, 5, 1, 3, 2]
let max = -Infinity

for(let i = 0; i < arr.length; i++){
    let sum = 0
    for(let j = i; j < arr.length; j++){
        sum += arr[j]
        if(sum > max){
            max = sum
        }
    }
}

console.log(max)