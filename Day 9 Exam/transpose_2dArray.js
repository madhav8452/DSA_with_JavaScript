let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

for(let i = 0; i < arr[0].length; i++){
    let str = ""
    for(let j = 0; j < arr.length; j++){
        str += arr[j][i] + " "
    }
    console.log(str)
}