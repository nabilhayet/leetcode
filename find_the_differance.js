var findTheDifference = function (s, t) {

    if (s.length == 0) return t

    for (let i = 0; i < s.length; i++) {
        if (t.includes(s[i])) {
            t = t.replace(s[i], '')
        }
    }
    return t
};