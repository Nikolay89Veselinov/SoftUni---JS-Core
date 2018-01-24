function roadRader(n) {
    let speed = n[0]
    let place = n[1]

    if (place === "city" && speed > 50 && speed <= 70) {
        console.log("speeding")
    } else if (place === "city" && speed > 70 && speed <= 90) {
        console.log("excessive speeding")
    } else if (place === "city" && speed > 90) {
        console.log("reckless driving")
    }
    if (place === "motorway" && speed > 130 && speed <= 150) {
        console.log("speeding")
    } else if (place === "motorway" && speed > 150 && speed <= 170) {
        console.log("excessive speeding")
    } else if (place === "motorway" && speed > 170) {
        console.log("reckless driving")
    }
    if (place === "interstate" && speed > 90 && speed <= 110) {
        console.log("speeding")
    } else if (place === "interstate" && speed > 110 && speed <= 130) {
        console.log("excessive speeding")
    } else if (place === "interstate" && speed > 130) {
        console.log("reckless driving")
    }
    if (place === "residential" && speed > 20 && speed <= 40) {
        console.log("speeding")
    } else if (place === "residential" && speed > 40 && speed <= 60) {
        console.log("excessive speeding")
    } else if (place === "residential" && speed > 60) {
        console.log("reckless driving")
    }
 
}
roadRader([100, 'motorway'])