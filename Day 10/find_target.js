let arr = [1,5,6,9,12,15]
target = 9
left = 0
right = arr.length - 1

while(left < right){
    if(arr[left] == target){
        console.log(left)
        break
    }
    else if(arr[right] == target){
        console.log(right)
        break
    }
    left++
    right--
}