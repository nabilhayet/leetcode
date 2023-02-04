var merge = function (nums1, m, nums2, n) {

    nums1.splice(m); // Removes all items after m(th) item

    for (let i = 0; i < n; i++) { // Push into nums1 n items from nums2
        nums1.push(nums2[i]);
    }

    nums1.sort((a, b) => { // Sort nums1 with .sort
        return a - b;
    });

};