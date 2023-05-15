var reverse = function (x) {

    if (x >= 2 ** 31 || x <= (-2) ** 31) return 0;

    let n = parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x)

    if (n >= 2 ** 31 || n <= (-2) ** 31) return 0;

    return n
};