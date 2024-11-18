let arr = [11,55,0,5,8,9]

//Accending Order

arr.sort((a,b) => a - b)

console.log(arr)

//Deccending Order find Second Max Number

let ans = arr.sort((a,b) => {
    return b - a;
})

console.log(ans)
console.log("Second Max Number:", ans[1])