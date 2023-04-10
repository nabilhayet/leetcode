var licenseKeyFormatting = function (s, k) {

    let str = ""
    s = s.toUpperCase();
    let arr = []

    for (let i = 0; i < s.length; i++) {

        if (arr.length > 0) {
            if (s[i] != "-") {
                if (str.length < k) {
                    str = str + s[i]
                    console.log('this is for other blocks')
                } else {
                    arr.push(str)
                    str = ""
                    console.log('We have pushed other blocks')
                    i = i - 1
                }
            }

        } else {
            if (str.length <= k && s[i] != "-") {
                str = str + s[i]
                console.log('this is else statement for 1st block')
            } else {
                arr.push(str)
                str = ""
                console.log('We have pushed the 1st block')
            }
        }
    }

    if (str.length > 0) arr.push(str)
    console.log(arr)
    return arr.join("-")
};