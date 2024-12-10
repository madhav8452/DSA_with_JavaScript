// Sum of row 

let arr = [[1,2,3,4], [5,6,7,8], [9,10,11,12]]
let ans = []

for(let i = 0; i < arr.length; i++){
    let sum = 0
    for(let j = 0; j < arr[i].length; j++){
        sum += arr[i][j]
    }
    ans.push(sum)
}

console.log(ans)