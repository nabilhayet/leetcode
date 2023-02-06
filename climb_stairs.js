var climbStairs = function (n) {

    let fibo = [1, 2]
    if (n == 1 || n == 2) return fibo[n - 1]
    let val;

    for (let i = 2; i < n; i++) {

        val = fibo[i - 1] + fibo[i - 2]
        fibo.push(val)
    }

    return fibo[n - 1]
};