var findPoisonedDuration = function (timeSeries, duration) {

    // start will be each element in array --> start -- 1
    // end will be (start + duration -1) --> end --> 1 + 2 - 1 --> 2
    // total time for one attack is (end - start + 1) --> 2 - 1 + 1 --> 2

    // check if 2nd start is equal to last/prev end --> new start --> 2
    // prev end --> 2
    // new end --> 2 + 2 -1 --> 3
    // if yes, then minus 1 again from total --> 3 -2 + 1 - 1 == 1
    // new total --> prev total + new total --> 2 + 1 = 3

    let result;
    let start = 0
    let end = 0
    let total = 0

    for (let i = 0; i < timeSeries.length; i++) {

        start = timeSeries[i] // 1 , 2 
        if (start <= end) {
            end = start + duration - 1 // 2 + 2 - 1 = 3
            total = total + (end - start + 1 - 1) // 2 + (3 - 2 + 1) = 4
        } else {
            end = start + duration - 1 // 1 + 2 - 1 = 2, 
            total = total + (end - start + 1) // 2 - 1 + 1 = 2
        }

    }

    return total
};