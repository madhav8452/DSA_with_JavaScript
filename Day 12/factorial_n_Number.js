function a(n){
    if(n == 0){
        return 1
    }

    return n * a(n - 1)
    
}

let n = 5;

console.log(a(n))