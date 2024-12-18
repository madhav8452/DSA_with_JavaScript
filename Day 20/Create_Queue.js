class queue {
    constructor(){
        this.arr = []
    }
    enqueue(a){
        this.arr.push(a)
    }
    dequeue(){
        if(this.isEmpty()){
            return 'Queue is Empty'
        }
        return this.arr.shift()
    }
    isEmpty(){
        return this.arr.length == 0
    }
    front(){
        return this.arr[0]
    }
    size(){
        return this.arr.length
    }
    print(){
        return this.arr
    }
}

let myqueue = new queue()

myqueue.enqueue(10)
myqueue.enqueue(20)
myqueue.enqueue(30)
myqueue.dequeue()

console.log(myqueue)
console.log(myqueue.isEmpty())
console.log(myqueue.front())
console.log(myqueue.size())
console.log(myqueue.print())