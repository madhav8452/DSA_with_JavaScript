class stack {
    constructor() {
        this.arr = []
    }
    push(el){
        this.arr.push(el)
    }
    pop(){
        if(this.arr.isEmpty){
            return "Underflow";
        }
        return this.arr.pop()
    }
    isEmpty(){
        return this.arr.length == 0
    }
    peek(){
        return this.arr[this.arr.length - 1]
    }
    size(){
        return this.arr.length
    }
    print(){
        return this.arr
    }
}

let stk = new stack()

let string = "[{()}]"

for(let i = 0; i < string.length; i++){
    stk.push(string[i])
}

let open = []
let close = []
let loop = stk.size() / 2
let i = 0

while(loop != 0){
    close.push(stk.peek())
    open.push(string[i])
    stk.pop()
    i++
    loop--
}

function brackets(){
    for(let i = 0; i < open.length; i++){
        if(open[i] == "[" && close[i] == "]" || open[i] == "{" && close[i] == "}" || open[i] == "(" && close[i] == ")" || open[i] == "<" && close[i] == ">"){
            continue
        }
        else{
            return false
        }
    } 

    return true
}

console.log(brackets())