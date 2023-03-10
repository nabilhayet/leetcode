var reverseString = function (s) {

    let a = 0
    let b = s.length - 1
    let temp

    while (a < b) {

        temp = s[a]
        s[a] = s[b]
        s[b] = temp
        a += 1
        b -= 1
    }
    return s
};