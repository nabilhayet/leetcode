var generate = function (numRows) {
    // 1st row -> 1[0,0]
    // 2nd row --> 1[1,0],  1[1,1]
    // 3rd row --> 1[2,0], 2[2,1] (1+1)[2,2], 1[2,3]
    // 4th row --> 1, 3(1+2), 3(2+1), 1
    // 5th row --> 1, 4(1+3), 6(3+3), 4(3+1), 1

    const matrix = [];
    for (let i = 0; i < numRows; i++) {
        matrix[i] = new Array(i + 1)
        matrix[i][0] = 1
        matrix[i][i] = 1
        for (let j = 1; j < i; j++) {
            matrix[i][j] = matrix[i - 1][j - 1] + matrix[i - 1][j]
        }
    }
    return matrix
};