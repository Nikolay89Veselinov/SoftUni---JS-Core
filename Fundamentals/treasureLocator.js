function treasureLocator(n) {

    for (var i = 0; i < n.length; i += 2) {
        let n1 = n[i]
        let n2 = n[i + 1]


        if (n1 >= 8 && n1 <= 9 && n2 >= 0 && n2 <= 1) {
            console.log("Tokelau")
        } else if (n1 >= 1 && n1 <= 3 && n2 >= 1 && n2 <= 3) {
            console.log("Tuvalu")
        } else if (n1 >= 5 && n1 <= 7 && n2 >= 3 && n2 <= 6) {
            console.log("Samoa")
        } else if (n1 >= 0 && n1 <= 2 && n2 >= 6 && n2 <= 8) {
            console.log("Tonga")
        } else if (n1 >= 4 && n1 <= 9 && n2 >= 7 && n2 <= 8) {
            console.log("Cook")
        } else {
            console.log("On the bottom of the ocean")
        }


    }

}
treasureLocator([4, 2, 1.5, 6.5, 1, 3])
