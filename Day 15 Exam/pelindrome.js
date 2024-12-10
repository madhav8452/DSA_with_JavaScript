// Check pelindrom

let str = "A man, a plan, a canal: Panama"
let newStr = "";
let left = 0
let right = str.length - 1
let flag = false

for(let i = 0; i < str.length; i++){
    if(str[i] == " " || str[i] == ":" ||str[i] == ","){
        continue
    }
    else{
        newStr += str[i].toLowerCase()
    }
}

function pelindrome(){
    while(left <= right){
        if(newStr[left] == newStr[right]){
            flag = true
        }
        left++
        right--   
    }    

    return flag
}



console.log(pelindrome())