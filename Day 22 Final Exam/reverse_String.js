
let stk = []
let string = "Hello"

for(let char of string){
    stk.push(char)
}

let str = "";

while(stk.length > 0){
    str += stk.pop()
}

console.log(str)
