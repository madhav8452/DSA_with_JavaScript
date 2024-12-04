function a(n, first, second){
    if(n == 7){
        console.log(first)
        return
    }
    
    n++
    first + a(n, second, first + second)
    
}

let n = 0
let first = 0
let second = 1

a(n, first, second)
