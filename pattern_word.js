var wordPattern = function (pattern, s) {

    let words = s.split(" ")

    if (words.length != pattern.length) return false

    let patt = new Map()
    let str = []

    for (let i = 0; i < words.length; i++) {
        if (!patt[words[i]]) {
            if (!str.includes(pattern[i])) {
                str.push(pattern[i])
                patt[words[i]] = pattern[i]
            } else {
                return false
            }

        } else {
            if (patt[words[i]] != pattern[i]) {
                return false
            }
        }
    }

    return true
};