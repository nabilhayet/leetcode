var constructRectangle = function (area) {

    let arr = []
    let i = area
    let j = 1
    let l;
    let w;
    let diff = 0
    let prev = 999999999999

    while (i >= j) {
        if (((i * j) == area) && i >= j) {
            diff = i - j
            if (diff < prev) {
                l = i
                w = j
                prev = diff
            }
            i -= 1
            j += 1
        } else if ((i * j) > area) {
            i -= 1
        } else if ((i * j) < area) {
            j += 1
        }
    }

    arr.push(l)
    arr.push(w)

    return arr

};