let arr1 = [1,2,3,4]
let arr2 = [3,4,5,6]
let ans = []
let mySet1 = new Set(arr1)
let mySet2 = new Set(arr2)

mySet1.forEach((el)=>{
    if(mySet2.has(el)){
        ans.push(el)
    }
})

console.log(ans)