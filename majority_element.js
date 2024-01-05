var majorityElement = function (nums) {

    let n = Math.floor(nums.length / 2)
    let numbers = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (numbers[nums[i]]) {
            numbers[nums[i]] += 1
        } else {
            numbers[nums[i]] = 1
        }
    }

    for (const num in numbers) {
        if (numbers[num] > n) {
            return num
        }
    }
};