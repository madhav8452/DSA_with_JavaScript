let arr = [1,5,6,9,12,15]
let target = 15
let left = 0
let right = arr.length - 1

function pairSum(){
    while(left < right){
        sum = arr[left] + arr[right]
    
        if(sum == target){
            return [left, right]
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