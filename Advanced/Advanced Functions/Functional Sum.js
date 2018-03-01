let func = (function () {
    let sum = 0
    return function increase (num) {
        sum+= num
        return sum
    }
    increase.toString = () => sum
    return increase
})()
console.log(func(15)(15))
