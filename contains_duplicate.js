var containsDuplicate = function (nums) {

    const numbers = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (numbers[nums[i]]) {
            numbers[nums[i]] += 1
        } else {
            numbers[nums[i]] = 1
        }
    }

    for (const n in numbers) {
        if (numbers[n] > 1) {
            return true
        }
    }

    return false
};