function extractAnNonDecreasingSubsequenceFromAnArray(input) {
    let num = input[0]

    for (var i = 0; i < input.length; i++) {
       if (input[i] >= num) {
           
        console.log(input[i])
          num = input[i]
       }
    } 
}
extractAnNonDecreasingSubsequenceFromAnArray([1,
3,
8,
4,
10,
12,
3,
2,
24
])
