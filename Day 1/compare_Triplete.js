let a = [3,2,1]
let b = [1,2,3]

function compareTriplets(a,b){
    let alice = 0;
    let bob = 0;

    for(let x = 0; x < a.length; x++){
        if(a[x] > b[x]){
            alice++;
        }
        else if(a[x] < b[x]){
            bob++;
        }
    }

    return [alice, bob]
}

console.log(compareTriplets(a,b))