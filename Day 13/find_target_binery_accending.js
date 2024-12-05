//Find the Target element with binary search 

let arr = [1,2,3,4,5,6,7,8]
let target = 1
let left = 0
let right = arr.length - 1

while(left <= right){
    let mid = Math.floor((left + right)/2)

    if(target == arr[mid]){
        console.log(mid)
        break
    }

    if(target < arr[mid]){
        right = mid - 1
    }
    else if(target > arr[mid]){
        left = mid + 1
    }
}