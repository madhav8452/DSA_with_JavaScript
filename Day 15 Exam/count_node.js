class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let node1 = new Node(10)
let node2 = new Node(20)
let node3 = new Node(30)
let node4 = new Node(40)
let node5 = new Node(50)

node1.next = node2
node1.next.next = node3
node1.next.next.next = node4
node1.next.next.next.next = node5

let temp = node1
let count = 0

while(temp != null){
    temp = temp.next
    count++
}
console.log(count)