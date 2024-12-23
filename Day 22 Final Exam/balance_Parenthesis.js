let stk = []
let string = "({[]})"

function isBalance(){
    let obj = {
        ']' : '[',
        '}' : '{',
        ')' : '('
    }

    for(let char of string){
        if(char == '[' || char == '{' || char == '('){
            stk.push(char)
        }
        else if(char == ']' || char == '}' || char == ')'){
            if(stk.length == 0 || stk.pop() != obj[char]){
                return false
            }
        }
    }

    return stk.length == 0
}

console.log(isBalance())