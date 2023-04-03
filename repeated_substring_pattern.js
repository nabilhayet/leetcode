var repeatedSubstringPattern = function (s) {

    if (s.length == 1) return false

    let arr = []
    let index = 0

    for (let i = 0; i < s.length; i++) {

        if (!arr.includes(s[i])) {
            arr.push(s[i])
        } else {
            if (s[i] == arr[index]) {
                index += 1
            } else {
                return false
            }
        }

        if (index == arr.length) {
            index = 0
        }


    }

    if (index == 0) {
        return true
    } else {
        return false
    }


    // console.log(arr)
};