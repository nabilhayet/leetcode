var canJump = function (nums) {

    let goal = nums.length - 1

    for (let i = nums.length - 2; i > -1; i--) {
        if (i + nums[i] >= goal) {
            goal = i
        }
    }

    return goal == 0 ? true : false

};