var arrangeCoins = function (n) {

    let arr = []
    let count = 0

    if (n == 0) return 0

    while (count < n) {

        arr[count] = count + 1 // arr[o] = 1, arr[1] = 2, arr[2] = 
        n = n - count - 1 // n = 4 , 2, 
        count += 1
    }

    arr[count] = n
    console.log(arr)
    return count

};