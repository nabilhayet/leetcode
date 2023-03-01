var addDigits = function (num) {

    if (num < 10) return num
    let n = num
    let sum = 0

    while (n >= 10) {
        const arrayOfDigits = Array.from(String(n), Number);

        for (let i = 0; i < arrayOfDigits.length; i++) {
            sum = sum + arrayOfDigits[i]
        }

        if (sum < 10) {
            n = sum
            break;
        } else {
            n = sum
            sum = 0
        }

    }

    return n;
};