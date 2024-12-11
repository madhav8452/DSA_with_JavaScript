let myMap = new Map()

myMap.set('a', 1)
myMap.set('b', 2)
myMap.set('c', 3)
myMap.set('d', 4)
myMap.set('e', 5)
myMap.set('a', 2)
myMap.delete('e')

console.log("Get Value :",myMap.get('b'))
console.log("If A Value has :",myMap.has('a'))
console.log("Size :",myMap.size)
console.log(myMap)

for(let key of myMap){
    console.log(key)
}

myMap.forEach((el)=>{
    console.log(el)
})