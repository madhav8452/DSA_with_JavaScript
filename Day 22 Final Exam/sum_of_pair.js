
let arr = [1, 2, 3, 4, 5, 6]
let target = 9
let left = 0
let right = arr.length - 1

function pairSum(){
    while(left < right){
        sum = arr[left] + arr[right]
    
        if(sum == target){
            return [arr[left], arr[right]]
        }
        else if(sum > target){
            right--
        }
        else{
            left++
        }
    }
    
    return -1
}

console.log(pairSum())
