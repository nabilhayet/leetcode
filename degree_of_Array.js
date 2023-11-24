var findShortestSubArray = function (nums) {
    let max = -Infinity
    let numbers = new Map()
    let element = []
    let output = Infinity
    let l;
    for (let i = 0; i < nums.length; i++) {
        if (numbers[nums[i]]) {
            numbers[nums[i]] += 1
        } else {
            numbers[nums[i]] = 1
        }
    }
    for (const n in numbers) {
        if (numbers[n] > max) {
            max = numbers[n]
        }
    }
    for (const n in numbers) {
        if (numbers[n] == max) {
            element.push(Number(n))
        }
    }
    for (let j = 0; j < element.length; j++) {
        let firstIndex = nums.indexOf(element[j]);
        let lastIndex = nums.lastIndexOf(element[j]);
        l = lastIndex - firstIndex + 1
        output = l < output ? l : output
    }
    return output

};