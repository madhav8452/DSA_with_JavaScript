//Stack work as a Queue with Array Method

let s1 = []
let s2 = []

function data(el){
    s2.push(el)
    
    while(s1.length > 0){
        s2.unshift(s1.pop())
    }

    [s1,s2] = [s2,s1]
}

data(10)
data(20)
data(30)
data(40)
data(50)

console.log(s1)