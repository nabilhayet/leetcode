var repeatedSubstringPattern = function (s) {

    if (s.length == 1) return false

    let str = new Map()
    let value = 0

    for (let i = 0; i < s.length; i++) {

        if (str[s[i]]) {
            str[s[i]] += 1
        } else {
            str[s[i]] = 1
        }
    }

    for (const s in str) {

        if (value == 0) {
            value = str[s]
        } else {
            if (value != str[s]) {
                return false
            }
        }
    }
    return true
};