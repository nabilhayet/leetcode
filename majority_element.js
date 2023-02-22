var majorityElement = function (nums) {

    const numbers = new Map()
    let n = Math.floor(nums.length / 2)

    for (let i = 0; i < nums.length; i++) {

        if (numbers[nums[i]]) {
            numbers[nums[i]] += 1
        } else {
            numbers[nums[i]] = 1
        }
    }

    for (const v in numbers) {
        if (numbers[v] > n) {
            return v
        }
    }
};