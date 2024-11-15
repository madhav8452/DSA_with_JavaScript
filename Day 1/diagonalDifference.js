// Difference between Left & Right Diagonal sum

// 11  2  4
//  4  5  6
// 10  8 -12

let arr = [[11,2,4], [4,5,6], [10,8,-12]]

function diagonalDifference(arr){

    let n = arr.length
    let d1 = 0;
    let d2 = 0;

    for(let x = 0; x < n; x++){
        d1 += arr[x][x];
        d2 += arr[x][n - 1 - x];
    }

    return Math.abs(d1 - d2);
}

console.log(diagonalDifference(arr))
