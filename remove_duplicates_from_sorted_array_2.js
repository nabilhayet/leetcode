var removeDuplicates = function (nums) {
    let numbers = new Map()

    for (let i = 0; i < nums.length; i++) {

        if (numbers[nums[i]]) {
            numbers[nums[i]] += 1
            if (numbers[nums[i]] > 2) {
                nums.splice(i, 1)
                i--
            }
        } else {
            numbers[nums[i]] = 1
        }
    }

};