let arr = [7, 10, 4, 3, 20, 15];
let k = 3;

function KthSmallest(){
    for(let i = 0; i < arr.length; i++){
        let min = i;
    
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
    
        temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }
    
    for(let i = 0; i < arr.length; i++){
        if(i + 1 == k){
            return arr[i];
        }
    }    
}

console.log(KthSmallest())