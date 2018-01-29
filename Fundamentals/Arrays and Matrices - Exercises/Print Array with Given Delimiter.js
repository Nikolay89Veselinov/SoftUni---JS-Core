function printAnArrayWithAGivenDelimiter(input) {
    let separator = input[input.length -1]
    input.pop()
    let result = ''

    for (let i = 0; i < input.length; i++) {
        if (i == 0) {
            result += input[i]
        } else {
            result += separator + input[i]
        }
    }

    console.log(result)
}
printAnArrayWithAGivenDelimiter(['One', "Two", 'Three', 'Four', 'Five', '-'])
