// Given an integer x, return true if x is a  palindrome, and false otherwise.

var isPalindrome = function (x) {

    if ((x < - Math.pow(2, 31)) || (x > (Math.pow(2, 31) - 1))) {
        return false;
    }

    if (x < 0) return false;

    const numToSeparate = x;

    const arrayOfDigits = Array.from(String(numToSeparate), Number);

    let i = 0;
    let j = arrayOfDigits.length - 1
    let result = true;

    while (i < j) {
        if (arrayOfDigits[i] != arrayOfDigits[j]) {
            return false
        }
        i++;
        j--;
    }

    return result;
};
