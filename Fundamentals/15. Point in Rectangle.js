function pointInRectangle(n) {
    let x = n[0]
    let y = n[1]
    let xMin = n[2]
    let xMax = n[3]
    let yMin = n[4]
    let yMax = n[5]

    if (x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
        console.log("inside")
    } else {
        console.log("outside")
    }


}
pointInRectangle([12.5, -1, 2, 12, -3, 3])