let arr = [[1,2,3], [4,5,6], [7,8,9]]
let target = 6;

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        if(arr[i][j] == target){
            console.log(arr[i][j])
        }
    }
}