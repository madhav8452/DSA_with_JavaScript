let matrix = []
let n = 3

for(let i = 0; i < n; i++){
    let arr = []
    for(let j = 0; j < n; j++){
        arr.push(Math.floor(Math.random() * 100) + 1)
    }
    matrix.push(arr)
}

for(let i = 0; i < matrix.length; i++){
    str = ""
    for(let j = 0; j < matrix.length; j++){
        str += matrix[i][j] + " "
    }
    console.log(str)
}