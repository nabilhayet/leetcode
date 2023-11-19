var findErrorNums = function (nums) {

    nums.sort(function (a, b) { return a - b });

    let numbers = []
    let value = 1
    result = []

    for (let i = 0; i < nums.length; i++) {
        if (numbers.includes(nums[i])) {
            result.push(nums[i])
        } else {
            numbers.push(nums[i])
        }
    }

    console.log(numbers)

    if (result.length == 1 && result[0] == 1 && nums.length == 2) {
        result.push(value + 1)
        return result
    }

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] != value) {
            result.push(value)
            break

        }
        value += 1
    }

    if (result.length < 2) {
        result.push(value)
    }

    return result
};