
var reverseStr = function (s, k) {

    if (s.length < k) return s.reverse()

    let newStr = ""
    newStr = s.substring(0, k)
    console.log(newStr)
    newStr = newStr.split('').reverse().join('')
    console.log(newStr)
    newStr = newStr + s.substring(k, s.length)
    console.log(newStr)

    return newStr
};