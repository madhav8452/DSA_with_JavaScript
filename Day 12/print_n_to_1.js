function a(b){
    if(b == 0){
        return
    }
    console.log(b)
    b -= 1
    a(b)
}

let n = 10
a(n)