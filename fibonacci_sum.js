var fib = function (n) {

    if (n < 2) return n

    fibonacci = [0, 1]
    let sum = 0

    if (n == 2) {
        sum += fibonacci[n - 1] + fibonacci[n - 2]
        return sum
    }
    else {
        for (let i = 2; i < n; i++) {
            fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
        }
    }

    sum = fibonacci[n - 1] + fibonacci[n - 2]
    return sum
};