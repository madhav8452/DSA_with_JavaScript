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

stk.push(40)
stk.push(50)
stk.push(60)

console.log(stk)
console.log("Array:", stk.print())
console.log("Peek Value: ",stk.peek())
console.log("Pop Value:", stk.pop())
console.log("Size:",stk.size())