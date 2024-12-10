// Find target element from sorted array

let arr = [1,2,3,4,5,6]
let target = 4
let left = 0
let right = arr.length - 1

function target_element(){
    while(left < right){
        if(arr[left] == target){
            return true
        }
        else if(arr[right] == target){
            return true
        }
        left++
        right--
    }    
    return false
}

console.log(target_element())