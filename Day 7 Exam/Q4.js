// Count target Occurence

let arr = [7, 3, 7, 8, 2, 7, 4];
target = 7;
let obj = {}

for(let i = 0; i < arr.length; i++){
    if(obj[arr[i]] == undefined){
        obj[arr[i]] = 1
    }
    else{
        obj[arr[i]]++
    }
}

for(let key in obj){
    if(key == target){
        console.log(obj[key])
    }
}
