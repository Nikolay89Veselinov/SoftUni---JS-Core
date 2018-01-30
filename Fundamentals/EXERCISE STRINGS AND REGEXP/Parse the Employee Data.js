function parseTheEmployeeData(str) {
    let n = /^([A-Z][a-z]*)\s-\s([0-9]+)\s-\s*([a-zA-z0-9 ]+)/gm
    let m = n.exec(str)
    while (m) {
        console.log(`Name: ${m[1]}`)
        console.log(`Position: ${m[3]}`)
        console.log(`Salary: ${m[2]} `)
        m = n.exec(str)
    }


}
parseTheEmployeeData('Jonathan - 2000 - Manager'+
    'Peter- 1000 - Chuck'+
    'George - 1000 - Team Leader')