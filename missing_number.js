var missingNumber = function (nums) {

    let n = nums.length
    nums.sort(function (a, b) { return a - b });
    console.log(nums)

    for (let i = 0; i <= n; i++) {

        if (nums.length == i) {
            return i
        }
        if (nums[i] != i) {
            return i
        }
    }
};