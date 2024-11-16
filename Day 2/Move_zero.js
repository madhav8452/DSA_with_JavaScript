// Move all zero in last of array

let arr = [1,2,3,0,5,0,0,5,6]
let movedZero = []

for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        movedZero.push(arr[i])
    }
}

countZero = arr.length - movedZero.length; // Output 3

for(let i = 1; i <= countZero; i++){
    movedZero.push(0)
}

console.log(movedZero);

