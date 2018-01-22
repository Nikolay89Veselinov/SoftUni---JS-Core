function dayOfWeeks(a) {
    let aray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturdau', 'Sunday']
    let index = aray.indexOf(day)
    return index > -1 ? index + 1 : 'error'


}

console.log(dayOfWeeks("Tuesday"))
