function a(arr, n){
    if(n == 0){
        return 0
    }
    n--
    return arr[n] + a(arr, n)

}

let arr = [1,2,3,4,5,6,7,8,9,10]
let n = arr.length

console.log(a(arr, n))