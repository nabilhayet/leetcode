var addBinary = function (a, b) {

    if (a == "0" && b == "0") return '0'

    if (a.length == 0 || b.length == 0) {
        return a || b
    }
    let num1 = Number(a)
    let num2 = Number(b)

    let result = ""

    let div1 = 0;
    let div2 = 0;
    let rem1 = 0;
    let rem2 = 0;
    let sum = 0;
    let carry = 0;

    while (num1 > 0 || num2 > 0) {

        rem1 = num1 % 10; // --> 11 % 10 = 1 --> 1 % 10 = 1
        console.log(rem1)
        rem2 = num2 % 10; // --> 1 % 10 = 1 --> 0 % 10 = 0
        console.log(rem2)
        sum = rem1 + rem2 + carry

        if (sum == 2) {
            sum = 0
            result = sum + result
            console.log(result)
            carry = 1
        } else if (sum == 3) {
            sum = 1
            result = sum + result
            carry = 1
            console.log(result)
        }
        else {
            result = sum + result
            carry = 0
            console.log(result)
        }

        num1 = Math.floor(num1 / 10) // --> 11 / 10 = 1 --> 1 / 10 = 0
        num2 = Math.floor(num2 / 10) // --> 1 / 10 = 0 --> 0 / 10 = 0
        console.log(num1)
        console.log(num2)
        console.log('----------------------')
    }

    if (carry == 1) {
        result = carry + result
    }

    return result;
};