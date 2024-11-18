let arr = [10, 20, 30, 40, 50]
let target = 30;
let flag = true;

for(let i = 0; i < arr.length; i++){
    if(!arr[i] == target){
        flag = false;
    }
}

if(flag){
    let ans = arr.indexOf(target)
    console.log(ans)
}
else{
    console.log(-1)
}

