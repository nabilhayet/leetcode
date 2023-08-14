var search = function (nums, target) {

    let found = nums.includes(target)

    if (found) {
        return nums.indexOf(target)
    } else {
        return -1
    }

};