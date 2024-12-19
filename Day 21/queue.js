let q1 = []
let q2 = []

function data(el){
    q2.push(el)

    while(q1.length > 0){
        q2.push(q1.shift())
    
    }
    
    [q1,q2] = [q2,q1]
}

data(10)
data(20)
data(30)
data(40)
data(50)

console.log(q1)


