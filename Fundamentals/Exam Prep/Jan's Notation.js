function jansNotation(arr) {
    let number = [];

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if(typeof current === 'number'){
            number.push(current)
        }else{
            if(number.length > 1){
                let num1 = number.pop();
                let num2 = number.pop();
                switch(current){
                    case "+": number.push(num2 + num1); break
                    case "-": number.push(num2 - num1); break
                    case "*": number.push(num2 * num1); break
                    case "/": number.push(num2 / num1); break
                    default: break
                }
            }else{
                console.log('Error: not enough operands!')
                return
            }
        }

    }
    number.length > 1 ? console.log('Error: too many operands!') : console.log(number[0])

}
jansNotation([31,
    2,
    '+',
    11,
    '/']


)