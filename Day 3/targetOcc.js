let arr = [1,2,2,3,4,2];
let target = 2;

let obj = {};

for(let i = 0; i < arr.length; i++){
    if(obj[arr[i]] == undefined){
        obj[arr[i]] = 1;
    }
    else{
        obj[arr[i]]++
    }
}

if(obj[target] == undefined){
    console.log(-1)
}
else{
    console.log(obj[target])
}