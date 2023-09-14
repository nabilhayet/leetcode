var jump = function (nums) {

    let output = 0
    let jump = 0
    let far = 0

    for (let i = 0; i < nums.length - 1; i++) {
        jump = Math.max(jump, nums[i] + i) // 2, 4

        if (i == far) {
            far = jump // 2, 4, 
            output++
        }
    }

    return output
};