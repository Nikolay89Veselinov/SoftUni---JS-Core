function spiceMustFlow(arr) {
    let parsNumber = Number(arr)
    let products = 0
    let days = 0

    if (parsNumber < 100){

    }else {

        while (parsNumber >= 100) {
            let counter = parsNumber
            counter -= 26
            products += counter
            parsNumber -= 10
            days += 1

        }
        products -=26
    }



    console.log(days)
    console.log(products)
}
spiceMustFlow(['20'])