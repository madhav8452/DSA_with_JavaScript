let arr = [64, 25, 12, 22, 11];

let index = () => {
    for(let i = 0; i < arr.length; i++){
        let min = i;
    
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
    
        temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp;

    }    
    return arr;
}

console.log(index())