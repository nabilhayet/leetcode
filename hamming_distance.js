var hammingDistance = function (x, y) {

    let result = 0
    let num1 = x.toString(2);
    let num2 = y.toString(2);

    let l1 = num1.length
    let l2 = num2.length

    if (l1 > l2) {
        num2 = num2.toString().padStart(l1, '0')
    } else {
        num1 = num1.toString().padStart(l2, '0')
    }

    for (let i = 0; i < num1.length; i++) {
        if (num1[i] != num2[i]) {
            result += 1
        }
    }

    return result

};