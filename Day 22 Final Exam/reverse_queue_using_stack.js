//Queue using 2 Stack

let s1 = []
let s2 = []

function push(el){
    s2.push(el)

    while(s1.length > 0){
        s2.unshift(s1.pop())
    }

    [s1, s2] = [s2, s1]
}

function pop(){
    return s1.shift()
}

function top(){
    return s1[0]
}

push(10)
push(20)
push(30)
push(40)
push(50)

let reverse = []

for(let i = s1.length - 1; i >= 0; i--){
    reverse.push(s1[i])
}

console.log(reverse)


