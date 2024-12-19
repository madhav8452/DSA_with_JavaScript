//Queue work as a Stack with class queue

class queue {
    constructor(){
        this.q1 = []
        this.q2 = []
    }
    enqueue(a){
        this.q2.push(a)

        while(this.q1.length > 0){
            this.q2.push(this.q1.shift())
        }

        [this.q1,this.q2] = [this.q2, this.q1]
    }
    dequeue(){
        if(this.isEmpty()){
            return 'Queue is Empty'
        }
        return this.q1.shift()
    }
    isEmpty(){
        return this.q1.length == 0
    }
    front(){
        return this.q1[0]
    }
    size(){
        return this.q1.length
    }
    print(){
        return this.q1
    }
}

let myqueue = new queue()

myqueue.enqueue(10)
myqueue.enqueue(20)
myqueue.enqueue(30)
myqueue.dequeue()
console.log(myqueue.front())
console.log(myqueue.print())