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
stk.push("Priyank")
stk.push("Milind")
stk.push("Madhav")

stk2 = new stack()

while(!stk.isEmpty()){
    stk2.push(stk.peek())
    stk.pop()
}

console.log(stk2)