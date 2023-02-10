var isPalindrome = function (s) {

    let lowerCase = s.toLowerCase()
    let removedSpace = lowerCase.replace(/\s/g, '');
    let alphaString = removedSpace.replace(/[^0-9a-z]/gi, '')
    let reversedString = alphaString.split("").reverse().join("");

    if (alphaString == reversedString) {
        return true;
    } else {
        return false;
    }

};