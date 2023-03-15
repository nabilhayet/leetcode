var intersection = function (nums1, nums2) {

    let result = []
    let n;

    for (let i = 0; i < nums1.length; i++) {
        n = nums1[i]
        if (nums2.includes(n) && !result.includes(n)) {
            result.push(n)
        }

    }

    return result

};