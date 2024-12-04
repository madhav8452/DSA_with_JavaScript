function a(b){
    if(b == 0){
        return 0
    }
    
    return b + a(b - 1)

}

let n = 10

console.log(a(n))