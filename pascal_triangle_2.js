var getRow = function (rowIndex) {

    /* [
        [1],
        [1,1],
        [1,2,1], => [2,1] = [1,1] + [1,0]
        [1,3,3,1]
    ]
    */

    let pascal = []

    for (let i = 0; i <= rowIndex; i++) {

        pascal[i] = new Array(i + 1)
    }

    for (let j = 0; j <= rowIndex; j++) {
        for (let k = 0; k <= j; k++) {
            if (k == 0 || k == j) {
                pascal[j][k] = 1
            } else {
                pascal[j][k] = pascal[j - 1][k] + pascal[j - 1][k - 1]
            }
        }
    }

    return pascal[rowIndex]

};