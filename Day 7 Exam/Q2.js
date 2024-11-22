//remove the first occurence

let arr = [1, 3, 5, 3, 7, 9]
let target = 3
let ans = []

let index = arr.indexOf(target)    

for(let i = 0; i < arr.length; i++){
    if(i == index){
        continue;
    }
    else{
        ans.push(arr[i])
    }
}


console.log(ans)