function cookingByNumbers(arr) {

    let number = arr[0]
    let operation = {
        chop: (num) => num / 2,
        dice: (num) => Math.sqrt(num),
        spice: (num) => ++num,
        bake: (num) => num * 3,
        fillet: (num) => num -= num * 0.2
    }

    for (var i = 1; i < arr.length; i++) {
        const currentOperation = arr[i]
        number = operation [currentOperation]
        console.log(number)
    }

}
cookingByNumbers([32, 'chop', 'chop', 'chop', 'chop', 'chop'])