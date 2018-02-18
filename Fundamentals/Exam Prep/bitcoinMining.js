function bitcoinMining(arr) {
    let input = arr.map(Number)
    let bitcoins = 0
    let leftMoney = 0
    let firstBitcoins = []


    for (var i = 0; i < input.length; i++) {
        let moneyCounter = 0
        let bitcoinsCounter = 0

        if ((i+1) % 3 === 0) {
            moneyCounter = (input[i] * 67.51) * 0.70
        } else {

            moneyCounter = input[i] * 67.51
        }
        leftMoney += moneyCounter
        if(leftMoney > 11949.16){
            firstBitcoins += i + 1
        }


    }

    while (leftMoney > 11949.16) {
        leftMoney = leftMoney - 11949.16
        bitcoins++

    }
    if(firstBitcoins  > 0) {
        console.log(`Bought bitcoins: ${bitcoins}`)
        console.log(`Day of the first purchased bitcoin: ${firstBitcoins[0]}`)
        console.log(`Left money: ${leftMoney.toFixed(2)} lv.`)
    }else
    {
        console.log(`Bought bitcoins: ${bitcoins}`)
        console.log(`Left money: ${leftMoney.toFixed(2)} lv.`)
    }

}
bitcoinMining([3124.15, 504.212, 2511.124])