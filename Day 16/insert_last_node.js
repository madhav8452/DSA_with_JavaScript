class node1 {
    constructor(){
        this.data = 10;
        this.next = null;
    }
}

class node2 {
    constructor(){
        this.data = 20;
        this.next = null;
    }
}

class node3 {
    constructor(){
        this.data = 30;
        this.next = null;
    }
}

class node4 {
    constructor(){
        this.data = 40;
        this.next = null;
    }
}

class node5 {
    constructor(){
        this.data = 50;
        this.next = null;
    }
}


let newNode 
newNode = new node1
newNode.next = new node2
newNode.next.next = new node3
newNode.next.next.next = new node4
newNode.next.next.next.next = new node5

let temp = newNode

while(temp != null){
    console.log(temp.data)
    temp = temp.next
}

