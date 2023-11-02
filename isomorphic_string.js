var isIsomorphic = function (s, t) {

    let result = true
    let isomor = new Map()
    let arr = []

    for (let i = 0; i < s.length; i++) {
        if (!isomor[s[i]]) {
            if (!arr.includes(t[i])) {
                arr.push(t[i])
                isomor[s[i]] = t[i]
            } else {
                result = false
                break
            }

        } else {
            let a = isomor[s[i]] == t[i]
            if (!a) {
                result = false
                break
            }
        }
    }

    return result
};