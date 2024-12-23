// Next Greater 

let arr =  [4,5,2,25]

let stack = []

let ans = new Array(arr.length).fill(-1)

for(let i = 0; i < arr.length; i++){
    while(stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]){
        let index = stack.pop()
        ans[index] = arr[i]
    }

    stack.push(i)
}

console.log(ans)