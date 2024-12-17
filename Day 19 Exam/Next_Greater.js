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
let arr = [4, 5, 2, 25]
let ans = new Array(arr.length).fill(-1)

for(let i = 0; i < arr.length; i++){
    while(stk.size() > 0 && arr[stk.peek()] < arr[i]){
        let index = stk.pop()
        ans[index] = arr[i]
    }

    stk.push(i)
}

console.log(ans)

