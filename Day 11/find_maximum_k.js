//Find maximum sum of subarray from target size of subarray 

let arr =  [2, 1, 5, 1, 3, 2]
let k = 3
let max = 0

for(let i = 0; i < arr.length; i++){
    let ans = []
    let sum = 0
    for(let j = i; j < arr.length; j++){
        ans.push(arr[j])
        sum += arr[j]
        if(ans.length == k){
            console.log(ans)
            if(sum > max){
                max = sum  
            }
        }
    }
}

console.log("Max sum :-",max)