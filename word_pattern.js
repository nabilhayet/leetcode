var wordPattern = function (pattern, s) {

    let arr = s.split(" ")
    if (arr.length != pattern.length) return false
    let words = []
    let p = new Map()

    for (let i = 0; i < pattern.length; i++) {

        if (!p[pattern[i]]) {
            if (words.includes(arr[i])) {
                return false
            } else {
                words.push(arr[i])
                p[pattern[i]] = arr[i]
            }

        } else {
            if (p[pattern[i]] != arr[i]) {
                return false
            }
        }
    }
    return true


};