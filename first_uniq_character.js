var firstUniqChar = function (s) {

    let arr = s.split('')
    let index;
    let elements = new Map()

    for (let i = 0; i < arr.length; i++) {
        if (!elements[arr[i]]) {
            elements[arr[i]] = 1
        } else {
            elements[arr[i]] += 1
        }
    }

    for (const l in elements) {
        if (elements[l] == 1) {
            index = arr.indexOf(l)
            console.log(index)
            return index
        }
    }

    return -1

};