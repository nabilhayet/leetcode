var strStr = function (haystack, needle) {
    if (needle.length == 0) return 0
    let value = -1;

    let doesContain;
    doesContain = haystack.includes(needle)

    if (!doesContain) {
        value = -1
    } else {
        haystack = haystack.replace(needle, '-')
        for (let i = 0; i < haystack.length; i++) {
            if (haystack[i] == '-') {
                value = i
                break;
            }
        }
    }
    return value
};