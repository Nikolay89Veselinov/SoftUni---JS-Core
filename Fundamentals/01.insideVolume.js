function insideVolume(n) {

    for (var i = 0; i <= n.length; i+=3) {
        let x = n[i]
        let y = n[i + 1]
        let z = n[i + 2]

        if (x >= 10 && x <= 50 && y >= 20 && y <= 80 && z >= 15 && z <= 50) {
            console.log("inside")
        } else {
            console.log("outside")
        }
    }
}
insideVolume([13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43
]) 