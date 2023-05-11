var lengthOfLongestSubstring = function (s) {

    if (s.length === 0) return 0;
    if (s.length === 1) return 1;

    let result = 0
    let str = ""
    let index;

    for (let i = 0; i < s.length; i++) {

        if (str.includes(s[i])) {

            result = Math.max(result, str.length)
            index = str.indexOf(s[i])
            str = str.slice(index + 1)
            str = str + s[i]
        } else {
            str = str + s[i]
        }
    }

    return Math.max(result, str.length)

};