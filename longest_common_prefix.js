var longestCommonPrefix = function (strs) {

    let result = ""
    let count
    let prevCount = 999
    let first = strs[0]

    for (let i = 1; i < strs.length; i++) {
        count = 0
        let item = strs[i]
        for (let j = 0; j < item.length; j++) {
            if (first[j] == item[j]) {
                count += 1
            } else {
                break;
            }
        }

        count = Math.min(prevCount, count)
        prevCount = count
    }
    result = first.substring(0, count)
    return result
};