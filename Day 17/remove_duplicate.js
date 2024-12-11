// Remove duplicates from Set

let arr = [1,2,2,3,4,4,5]
let mySet = new Set(arr)
let ans = []

for(let char of mySet){
    ans.push(char)
}

console.log(ans)