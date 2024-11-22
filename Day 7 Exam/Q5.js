//array Even then double ans odd then half

let arr = [10, 15, 20, 25, 30]
let ans = []

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
        let Doubled = arr[i] * 2
        ans.push(Doubled)
    }
    else{
        let half = arr[i] / 2
        ans.push(half)
    }
}

console.log(ans)