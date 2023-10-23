var countBits = function (n) {

    let arr = []
    let temp

    for (let i = 0; i < n + 1; i++) {
        temp = i.toString(2)
        arr.push(countNo(temp))
    }

    function countNo(temp) {
        temp = temp.split("")
        let sum = 0
        for (let k = 0; k < temp.length; k++) {
            if (temp[k] == 1) {
                sum++
            }
        }
        return sum;
    }

    return arr
};