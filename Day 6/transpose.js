// Expected Output
// [1,3,5],
// [2,4,6]

let arr =  [[1,2],  
            [3,4], 
            [5,6]]

let ans = [];
for(let i = 0; i < arr[0].length; i++){
    let a = [];
    for(let x = 0; x < arr.length; x++){
        a.push(arr[x][i])
    }
    ans.push(a)
}

console.log(ans)