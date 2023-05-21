var maxArea = function (height) {

    let result = 0;
    let currResult;

    let i = 0;
    let j = height.length - 1

    while (i <= j) {

        if (height[i] > height[j]) {
            currResult = height[j] * (j - i)
            j -= 1
        } else {
            currResult = height[i] * (j - i)
            i += 1
        }

        result = Math.max(result, currResult)


    }

    return result
};