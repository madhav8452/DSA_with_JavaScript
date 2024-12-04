function a(b){
    if(b == 0){
        return 
    }
    a(b - 1)
    console.log(b)
}

let n = 10

a(n)