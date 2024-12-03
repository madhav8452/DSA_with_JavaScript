//Find subarray whos sum lessthen target return count of how many subarray

let arr = [1,2,3]
let k = 5
let count = 0

for(let i = 0; i < arr.length; i++){
    let sum = 0
    let ans = []
    for(let j = i; j < arr.length; j++){
        sum += arr[j]
        if(sum < k){
            count++
            ans.push(arr[j])
            console.log(ans)
        }
    }
}

console.log("Total sub-array :-",count)