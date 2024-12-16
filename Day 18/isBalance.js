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

function isBalance(){
    let obj = {
        ']' : '[',
        '}' : '{',
        ')' : '('
    }

    for(let char of string){
        if(char == '[' || char == '{' || char == '('){
            stk.push(char)
        }
        else if(char == ']' || char == '}' || char == ')'){
            if(stk.size() == 0 || stk.pop() != obj[char]){
                return false
            }
        }
    }

    return stk.size() == 0
}

console.log(isBalance())