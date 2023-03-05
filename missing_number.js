var missingNumber = function (nums) {

    let n = nums.length
    nums.sort(function (a, b) { return a - b });
    console.log(nums)

    for (let i = 0; i <= n; i++) {

        if (nums.length == i) {
            return i
        }
        if (nums[i] != i) {
            return i
        }
    }
};

[1, 2, 3, 4, 5,
    [6]
]

[4][4]

[
    [0, , 1, 2, 3],
    [4, 5, 6, 7, 8,],
    [7., 9, 0, 5],
    [1, 2, 3, 4]


]