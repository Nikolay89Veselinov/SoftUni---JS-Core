function findVariableNamesInSentences(str) {
    let variables = [];
    let regex = /\b_([a-zA-Z0-9]+)/g;

    let match = regex.exec(str);

    while (match) {
        variables.push(match[1]);
        match = regex.exec(str);
    }

    console.log(variables.join(","));
}
findVariableNamesInSentences(`__invalidVariable _evenMoreInvalidVariable_ _validVariable`)