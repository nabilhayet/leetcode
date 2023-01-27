var removeDuplicates = function (nums) {

    const sorted = {}
    let k
    for (let i = 0; i < nums.length; i++) {
        if (!sorted[nums[i]]) {
            sorted[nums[i]] = 1
        } else {
            nums.splice(i, 1)
            i -= 1
        }
    }

    console.log(nums)
};