var nextGreaterElement = function (nums1, nums2) {

    let arr = []
    let index
    let element

    for (let i = 0; i < nums1.length; i++) {

        if (nums2.includes(nums1[i])) {
            index = nums2.indexOf(nums1[i])

            if (index == nums2.length - 1) {
                arr.push(-1)
            } else {
                const element = nums2.find((v, ind) => {
                    return (v > nums1[i] && ind > index)
                });
                console.log(element)

                if (element == undefined) {
                    arr.push(-1)
                } else {
                    arr.push(element)
                }
            }
        }
    }

    return arr
};