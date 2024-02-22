const fs = require("fs")

function decode(message_file) {
    let contents = fs.readFileSync("message_file.txt").toString().split(/\r?\n/)

    /* 
    read from file and convert it into an array like this 

    [3love,
     6computers,
     2dogs,
     4cats,
     1I,
     5you]
     
    */
    let number_word = new Map()
    let numbers = []

    for (let i = 0; i < contents.length; i++) {
        let word = contents[i].split(/(\d)/)
        // [3, love] -- for 1st iteration 
        numbers.push(word[0])
        if (!number_word[word[0]]) {
            number_word[word[0]] = word[1]
        }


    }

    // number_word = { 
    // 1: I 
    // 2: dogs
    // 3: love 
    // 4: cats
    // 5: you
    // 6: computers}

    // numbers = [1,2,3,4,5,6]

    numbers.sort(function (a, b) {
        return a - b
    })

    let pyramid_numbers = [[]]

    let l = Math.floor(Math.sqrt(numbers.length))
    let n = 0

    for (let i = 0; i <= l; i++) {
        for (let j = 0; j <= i; j++) {
            pyramid_numbers[i][j] = numbers[n]
            n += 1
        }
    }
    let decoded_string = ""

    for (let i = 0; i <= l; i++) {
        let last = pyramid_numbers[i].length
        let v = pyramid_numbers[i][last - 1]
        decoded_string = decoded_string + number_word[v]
    }


    return decoded_string
}

