let arr = [1,2,2,3,4,4,5];

//Mathod 1 using array

let ans = [];

for(let i = 0; i < arr.length; i++){
    if(!ans.includes(arr[i])){
        ans.push(arr[i])
    }
}

console.log(ans)

//Mathod 2 using obj

let obj = {};

for(let i = 0; i < arr.length; i++){
    if(obj[arr[i] == undefined]){
        obj[arr[i]] = 1;
    }
    else{
        obj[arr[i]]++
    }
}

for(let key in obj){
    ans.push(Number(key))
}

console.log(ans)