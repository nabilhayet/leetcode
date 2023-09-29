var thirdMax = function (nums) {

    nums.sort(function (a, b) { return b - a });

    let result;
    let uniqueNumbers = []
    let count = 0

    for (let i = 0; i < nums.length; i++) {

        if (!uniqueNumbers.includes(nums[i])) {
            uniqueNumbers.push(nums[i])
            count += 1
        }

        if (count == 3) {
            return uniqueNumbers[2]
        }
    }

    if (count != 3) {
        return nums[0]
    }

};