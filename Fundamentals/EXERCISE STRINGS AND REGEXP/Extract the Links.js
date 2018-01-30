function extractTheLinks(arrOfString) {

    let emails = []
    let pattern = /www\.[A-Za-z0-9-]+(\.[a-z]+)+/g

    for (const string of arrOfString) {
        let match = pattern.exec(string)
        while (match) {
            emails.push(match[0])
            match = pattern.exec(string)
        }

    }
    return emails.join('\n')
    console.log(match[0])
}
extractTheLinks('Need information about cheap hotels in London ?',
    'You can check us at www.london-hotels.co.uk!',
'We provide the best services in London.',
'Here are some reviews in some blogs:',
    '"London Hotels are awesome!" - www.indigo.bloggers.com',
'"I am very satisfied with their services" - ww.ivan.bg',
'"Best Hotel Services!" - www.rebel21.sedecrem.moc"'
)
 