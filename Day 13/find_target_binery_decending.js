//Find Target binary search with decending

let arr = [8,7,6,5,4,3,2,1]
let target = 8
let left = 0
let right = arr.length - 1

while(left <= right){
    let mid = Math.floor((left + right)/2)
    
    if(target == arr[mid]){
        console.log(mid)
        break
    }

    if(target > arr[mid]){
        right = mid - 1
    }
    else if(target < arr[mid]){
        left = mid + 1
    }
}
