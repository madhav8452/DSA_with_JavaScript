let arr = [1000000001,1000000002,1000000003,1000000004,1000000005]

function aVeryBigSum(arr){
    let sum = 0;

    for(let x = 0; x < arr.length; x++){
        sum += arr[x]
    }

    return sum;
}

console.log(aVeryBigSum(arr))