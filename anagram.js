var isAnagram = function (s, t) {

    if (s.length != t.length) return false

    const letters = new Map()

    for (let i = 0; i < s.length; i++) {
        if (letters[s[i]]) {
            letters[s[i]] += 1
        } else {
            letters[s[i]] = 1
        }
    }

    console.log(letters)

    for (let j = 0; j < t.length; j++) {
        if (letters[t[j]]) {
            letters[t[j]] -= 1
        }
    }

    console.log(letters)

    for (const l in letters) {
        if (letters[l] != 0) {
            return false
        }
    }

    return true
};