let arr =  [7,8,9,1,2,3]
target = 1  
left = 0
right = arr.length - 1

function rotatearr(){
    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        
        if(arr[mid] == target){
            return mid
        }

        if(arr[left] <= arr[mid]){
            if(target >= arr[left] && target <= arr[mid]){
                right = mid - 1
            }
            else{
                left = mid + 1
            }
        }
        else{
            if(target > arr[mid] && target <= arr[right]){
                left = mid + 1
            }
            else{
                right = mid - 1
            }
        }
    }
    return -1
}

console.log(rotatearr())