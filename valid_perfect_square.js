var isPerfectSquare = function (num) {

    let i = 1

    while (i * i <= num) {

        if (i * i == num) return true
        i += 1
    }

    return false
};