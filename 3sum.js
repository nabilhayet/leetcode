var threeSum = function (nums) {

    if (nums.length < 3) return [];

    let result = [];
    let sum = 0;

    //sort array
    nums.sort((a, b) => (a - b))

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                let tempArr = [];
                tempArr.push(nums[i]);
                tempArr.push(nums[left]);
                tempArr.push(nums[right]);
                result.push(tempArr);
                left++;
                right--;
                // To avoid duplicates
                //check the next item for left pointer, if it same then increase left pointer until we get different item
                while (nums[left] == nums[left - 1] && left < right) {
                    left++;
                }
                // above left pointer logic applied here for right pointer
                while (nums[right] == nums[right + 1] && left < right) {
                    right--;
                }
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    return result;
};