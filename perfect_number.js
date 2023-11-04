var checkPerfectNumber = function (num) {

    let arr = []
    let n = 1
    let sum = 0

    while (n <= num / 2) {
        if (num % n == 0) {
            arr.push(n)
        }
        n += 1
    }
    console.log(arr)
    sum = arr.reduce(function (a, b) { return a + b; }, 0);
    console.log(sum)
    return sum == num ? true : false

};