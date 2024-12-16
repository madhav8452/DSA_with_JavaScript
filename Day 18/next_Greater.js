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
let arr = [1,5,6,12,0,9,5]

for(let i = 0; i < arr.length; i++){
    if(arr[i + 1] > arr[i]){
        arr[i] = arr[i + 1]
        stk.push(arr[i])
    }
    else{
        stk.push(-1)
    }
}

console.log(stk)




