//Square Array if Even

let arr = [2, 5, 8, 11, 14]
let ans = []

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        let square = arr[i] * arr[i]
        ans.push(square)
    }
    else{
        ans.push(arr[i])
    }
}

console.log(ans)