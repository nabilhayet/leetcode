var searchRange = function (nums, target) {

    let result = []

    if (nums.includes(target)) {
        result.push(nums.indexOf(target))
    } else {
        result.push(-1)
    }

    let found = nums.lastIndexOf(target)

    if (found >= 0) {
        result.push(found)
    } else {
        result.push(-1)
    }

    return result
};