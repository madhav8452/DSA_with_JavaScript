//Find Middle of node

class node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let newNode;
newNode = new node(1)
newNode.next = new node(2)
newNode.next.next = new node(3)
newNode.next.next.next = new node(4)
newNode.next.next.next.next = new node(5)

let temp = newNode
let count = 0

while(temp.next != null){
    temp = temp.next
    count++;
}

let middle = Math.ceil(count / 2)

temp = newNode;

for(let i = 1; i <= middle; i++){
    temp = temp.next
}

console.log(temp)
