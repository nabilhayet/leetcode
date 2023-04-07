var findComplement = function (num) {

    let n
    n = num.toString(2)
    let output = []
    let result;

    for (let i = 0; i < n.length; i++) {
        if (n[i] == '0') {
            output[i] = '1'
        } else {
            output[i] = '0'
        }
    }
    result = output.join('')

    result = parseInt(result, 2)
    return result
};