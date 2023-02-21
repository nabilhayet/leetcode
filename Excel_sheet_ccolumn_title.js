var convertToTitle = function (columnNumber) {

    let str = '';
    while (columnNumber > 0) {
        columnNumber--;
        let rem = columnNumber % 26;
        if (rem >= 0) str = String.fromCharCode(rem + 65) + str;
        columnNumber /= 26;
    }
    return str;
};