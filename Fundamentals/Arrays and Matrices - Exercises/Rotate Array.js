function rotateArray(arr) {
    let rotation = Number(arr.pop())

    for (var i = 0; i < rotation % arr.length; i++) {
        arr.unshift(arr.pop())
    }
    console.log(arr.join(' '))
}
rotateArray(['Banana',
'Orange',
'Coconut',
'Apple',
15])