//Find first occurence in binery search 

let arr = [1,2,2,2,5,6,7,9]
let target = 2
let left = 0
let right = arr.length - 1
let ans = -1

while(left <= right){
    let mid = Math.floor((left + right)/2)

    if(target == arr[mid]){
        ans = mid
        right = mid - 1
    }

    if(target < arr[mid]){
        right = mid - 1
    }
    else if(target > arr[mid]){
        left = mid + 1
    }
}
console.log(ans)
