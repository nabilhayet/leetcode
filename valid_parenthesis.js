var isValid = function (s) {

    if (s.length == 1) return false
    const arr = []
    const paren = new Map()

    paren.set('(', ')');
    paren.set('{', '}');
    paren.set('[', ']');

    for (let i = 0; i < s.length; i++) {
        if (paren.has(s[i])) {
            arr.push(paren.get(s[i]))
            console.log(arr)
        } else {
            if (arr.length == 0) {
                arr.push(s[i])
            } else {
                let j = arr.length - 1
                if (s[i] == arr[j]) {
                    arr.pop()
                } else {
                    arr.push(s[i])
                    console.log(arr)
                }
            }

        }
    }

    if (arr.length == 0) {
        return true
    } else {
        return false
    }
};