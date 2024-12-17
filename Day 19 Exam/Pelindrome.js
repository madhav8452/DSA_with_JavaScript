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
let string = "radar";

for(let char of string){
    stk.push(char)
}

let newStr = "";

while(!stk.isEmpty()){
    newStr += stk.peek()
    stk.pop()
}

if((string.toLowerCase()) == (newStr.toLowerCase())){
    console.log(true)
}
else{
    console.log(false)
}
