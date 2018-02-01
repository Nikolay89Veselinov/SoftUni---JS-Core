function addRemove(arr) {
    let result = [];
    let counter = 1
    let commands = {
        add: (num) => result.push(num),
        remove: (num) => result.pop()
}
for (let idx = 0; idx < arr.length; idx ++){
        const cmd = arr[idx]
    commands[cmd](counter)
    counter++
    }
if (result.length === 0) {
        console.log('Empty')
    }
    result.forEach(num => console.log(num))
}
addRemove(['add',
'add',
'remove',
'add',
'add'])