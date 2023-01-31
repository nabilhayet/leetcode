var lengthOfLastWord = function (s) {

    let strArray = s.trim().split(' ')

    let lastWord = strArray[strArray.length - 1]
    return lastWord.length
};