let arr = [1,2,2,3,4,2];
let max = 0;

let obj = {};

for(let i = 0; i < arr.length; i++){
    if(obj[arr[i]] == undefined){
        obj[arr[i]] = 1;
    }
    else{
        obj[arr[i]]++;
    }
}

for(let key in obj){
    if(max < obj[key]){
        max = key;
    }
}

console.log(max)