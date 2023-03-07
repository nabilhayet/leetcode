var canWinNim = function (n) {

    if (n == 1 || n == 2) return true

    if (n % 4 != 0) {
        return true
    } else {
        return false
    }
};