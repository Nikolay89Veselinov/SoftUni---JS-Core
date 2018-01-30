function formFiller(username, email, phone, data) {
    data.forEach(line => {
        line = line.replace(/<![a-zA-z]+!>/g, username)
        line = line.replace(/<@[a-zA-z]+@>/g, email)
        line = line.replace(/<[+][a-zA-z]+[+]>/g, phone)
        console.log(line) 
    })
}
formFiller('Pesho',
'pesho@softuni.bg',
'90 - 60 - 90',
['Hello, >!username! & gt;!>',
'Welcome to your Personal profile.',
'Here you can modify your profile freely.',
'Your current username is: <!fdsfs!>. Would you like to change that? (Y / N)',
'Your current email is: <@DasEmail@>. Would you like to change that? (Y / N)',
'Your current phone number is: <+number+>. Would you like to change that? (Y / N)'])