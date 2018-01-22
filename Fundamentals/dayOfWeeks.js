function dayOfWeeks(day) {
    let aray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    let index = aray.indexOf(day)
    return index > -1 ? index + 1 : 'error'


}

console.log(dayOfWeeks("Tuesday"))
