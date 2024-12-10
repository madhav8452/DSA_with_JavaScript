// Check pelindrom

let str = "A man, a plan, a canal: Panama"

function pelindrome(){
    let newStr = "";

    for(let i = 0; i < str.length; i++){
        if(str[i] == " " || str[i] == ":" ||str[i] == ","){
            continue
        }
        else{
            newStr += str[i].toLowerCase()
        }
    }

    let left = 0
    let right = newStr.length - 1

    while(left < right){
        if(newStr[left] != newStr[right]){
            return false
        }
        left++
        right--   
    }    

    return true
}

console.log(pelindrome())