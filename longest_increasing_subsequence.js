var findLengthOfLCIS = function (nums) {
    let count = 1
    let max = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i + 1]) {
            count += 1
            max = Math.max(max, count)
        } else {
            count = 1
        }
    }

    return max > 0 ? max : 1
};