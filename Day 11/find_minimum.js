let arr = [2, 1, 5, 1, 3, 2]
let min = Infinity

for(let i = 0; i < arr.length; i++){
    let sum = 0
    for(let j = i; j < arr.length; j++){
        sum += arr[j]
        if(sum < min){
            min = sum
        }
    }
}

console.log(min)