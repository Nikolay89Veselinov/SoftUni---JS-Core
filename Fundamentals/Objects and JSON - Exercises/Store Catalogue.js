function getStoreCatalogue(arrayOfString) {
    let catalogue = new Map
    let upperCaseLatters = new Set

    for (const string of arrayOfString) {
        let [product, price] = string.split(' : ')
        catalogue.set(product, price)
        let firstLatter = product[0].toUpperCase()
            upperCaseLatters.add(firstLatter)
        
    }
    let sortedLetters = Array.from(upperCaseLatters.values()).sort()
    for (let latter of sortedLetters) {
        console.log(latter)
        for (const key of [...catalogue.keys()].sort()) {
            if (key[0].toUpperCase() === latter) {
                console.log(`   ${key}: ${catalogue.get(key)}`)
            }
        }
    }
}
getStoreCatalogue('Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti- Bug Spray : 15',
'T- Shirt : 10',
)