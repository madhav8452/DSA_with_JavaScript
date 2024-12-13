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

let string = "nayan"

for(let char of string){
    stk.push(char)
}

let str = "";

while(!stk.isEmpty()){
    str += stk.peek()
    stk.pop()
}

if(string == str){
    console.log("String is Pelindrome")
}
else{
    console.log("String is not Pelindrom")
}