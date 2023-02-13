var singleNumber = function (nums) {

    const obj = new Map()

    for (let i = 0; i < nums.length; i++) {

        if (!obj[nums[i]]) {
            obj[nums[i]] = 1
        } else {
            obj[nums[i]] += 1
        }
    }

    for (const o in obj) {
        if (obj[o] == 1) {
            return o
        }
    }
};