let arr = [1,2,2,3,3,3]

let myMap = new Map()

arr.forEach((el)=>{
    if(!myMap.has(el)){
        myMap.set(el, 1)
    }
    else{
        myMap.set(el, myMap.get(el) + 1)
    }
})

console.log(myMap)