var calPoints = function (operations) {

    let result = []
    let value = 0
    for (let i = 0; i < operations.length; i++) {
        if (!isNaN(operations[i])) {
            result.push(Number(operations[i]))
        } else if (operations[i] == "+") {
            value = result[result.length - 1] + result[result.length - 2]
            result.push(value)
        } else if (operations[i] == "D") {
            value = 2 * result[result.length - 1]
            result.push(value)
        } else if (operations[i] == "C") {
            result.pop()
        }
    }
    if (result.length == 0) return 0
    value = result.reduce((partialSum, a) => partialSum + a, 0);
    return value
};