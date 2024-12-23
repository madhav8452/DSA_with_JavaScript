//Stack using 2 Queue

let q1 = []
let q2 = []

function push(el){
    q2.push(el)

    while(q1.length > 0){
        q2.push(q1.shift())
    }

    [q1, q2] = [q2, q1]
}

function pop(){
    return q1.shift()
}

function top(){
    return q1[0]
}

push(10)
push(20)
push(30)
pop()

console.log(q1)
console.log(top())