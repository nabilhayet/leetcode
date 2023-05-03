var findDifference = function (nums1, nums2) {

    let first = []
    let second = []
    let result = []

    for (let i = 0; i < nums1.length; i++) {

        if (!nums2.includes(nums1[i])) {
            if (!first.includes(nums1[i])) {
                first.push(nums1[i])
            }
        }
    }

    result.push(first)

    console.log(first)

    for (let i = 0; i < nums2.length; i++) {

        if (!nums1.includes(nums2[i])) {
            if (!second.includes(nums2[i])) {
                second.push(nums2[i])
            }
        }
    }

    console.log(second)

    result.push(second)

    return result
};