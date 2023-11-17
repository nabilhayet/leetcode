var findMaxAverage = function (nums, k) {

    let average = -Infinity
    let left = 0
    let sum = 0

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]

        if (right - left + 1 == k) {
            average = Math.max(average, sum / k)
            sum = sum - nums[left]
            left++
        }
    }

    return average

};