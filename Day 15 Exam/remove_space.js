// Remove space from string

let str = "Hello World Python"
let removedSpace = "";

for(let i = 0; i < str.length; i++){
    if(str[i] == " "){
        continue;
    }
    removedSpace += str[i]
}

console.log(removedSpace)