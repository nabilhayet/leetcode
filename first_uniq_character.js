var firstUniqChar = function (s) {

    let arr = s.split('')
    let elements = []
    let index;

    for (let i = 0; i < arr.length; i++) {

        if (!elements.includes(arr[i])) {
            elements.push(arr[i])
        } else {
            index = elements.indexOf(arr[i])
            elements.splice(index, 1)
        }
    }

    if (elements.length == 0) return -1

    index = arr.indexOf(elements[0])

    return index

};