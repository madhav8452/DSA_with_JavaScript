//Find the Target element with binary search 

let arr = [1, 3, 5, 7, 9, 11]
let target = 7
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