let arr1 = [1,2,3]
let arr2 = [3,4,5]
let ans = []

let mySet = new Set(arr1)

arr2.forEach((el)=>{
    mySet.add(el)
})

for(let char of mySet){
    ans.push(char)
}

console.log(ans)