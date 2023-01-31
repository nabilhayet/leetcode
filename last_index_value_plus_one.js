var plusOne = function (digits) {

    let carry = 1;
    let sum;

    if (digits.length == 1) {
        sum = digits[digits.length - 1] + 1

        if (sum > 9) {
            digits[digits.length - 1] = 0
            digits.unshift(1);
            return digits;
        } else {
            digits[digits.length - 1] = sum
            return digits
        }
    }
    else {
        for (let i = digits.length - 1; i > -1; i--) {
            sum = digits[i] + carry
            if (sum > 9) {
                digits[i] = 0;
                carry = 1
            } else {
                digits[i] = sum
                carry = 0
                break;
            }
        }
    }
    if (carry == 1) {
        digits.unshift(carry);
    }

    return digits
};