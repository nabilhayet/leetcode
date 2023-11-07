var detectCapitalUse = function (word) {

    let count = 0

    for (let i = 0; i < word.length; i++) {
        if (word[i] == word[i].toUpperCase()) {
            count += 1
        }
    }

    if (count == word.length) return true
    if (count == 0) return true
    if (count == 1 && word[0] == word[0].toUpperCase()) return true

    return false
};