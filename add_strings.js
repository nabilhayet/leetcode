var addStrings = function (num1, num2) {

    const n = num1.length;
    const m = num2.length;

    let i = n - 1; // index for num1
    let j = m - 1; // index for num2

    let res = "";
    let carry = 0;

    while (i >= 0 || j >= 0) {
        const dig1 = i < 0 ? 0 : parseInt(num1.charAt(i));
        const dig2 = j < 0 ? 0 : parseInt(num2.charAt(j));

        const sum = dig1 + dig2 + carry;
        const dig3 = sum % 10;
        carry = Math.floor(sum / 10);

        res = dig3 + res;
        i--;
        j--;
    }

    if (carry == 1) res = carry + res;

    return res;
};