var removeDuplicates = function (nums) {
    let arr = []

    for (let i = 0; i < nums.length; i++) {
        if (arr.includes(nums[i])) {
            nums.splice(i, 1)
            i--
        } else {
            arr.push(nums[i])
        }
    }
};