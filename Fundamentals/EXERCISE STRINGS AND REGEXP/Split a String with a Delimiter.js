function splitAString(text, delimiter) {
    let splittedElements = text.split(delimiter)

    for (var i = 0; i < splittedElements.length; i++) {
        console.log(splittedElements[i])
    }
}
splitAString('One-Two-Three-Four-Five', '-')
