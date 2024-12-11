class node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let node1 = new node(10)
let node2 = new node(20)
let node3 = new node(30)

node1.next = node2
node1.next.next = node3

let temp = node1

while(temp.next != null){
    temp = temp.next
    console.log(temp.data)
}
