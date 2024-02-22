var rotate = function (nums, k) {

    while (nums.length <= k) {
        k = k - nums.length
    }

    const temp = nums.splice(0, nums.length - k)
    nums.push(...temp)
};