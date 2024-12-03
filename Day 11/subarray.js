let arr = [2, 1, 5, 1, 3, 2]

for(let i = 0; i < arr.length; i++){
    let ans = []
    for(let j = i; j < arr.length; j++){
        ans.push(arr[j])
        console.log(ans)
    }
}