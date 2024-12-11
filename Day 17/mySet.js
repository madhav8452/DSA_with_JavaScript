let mySet = new Set()

mySet.add(4)
mySet.add(1)
mySet.add(2)
mySet.add(3)
mySet.delete(4)
mySet.clear()

console.log(mySet.has(4))
console.log("Size :",mySet.size)
console.log(mySet)

for(let char of mySet){
    console.log(char)
}

mySet.forEach((el)=>{
    console.log(el)
})