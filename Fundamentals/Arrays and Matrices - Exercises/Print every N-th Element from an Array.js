function printEveryNElementFromAnArray(input) {

    let step = Number(input[input.length - 1])
    input.pop()


    for (var i = 0; i < input.length; i += step) {
        console.log(input[i])
    }
}
printEveryNElementFromAnArray([1,
2,
3,
4,
5,
6

])
