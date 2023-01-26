var longestCommonPrefix = function (strs) {

    if (strs.length == 0) return ""
    if (strs.length == 1) return strs[0]

    let output;
    let compare = strs[0];
    let l;
    let newString;
    let prevnumOfString = 0;
    let numOfString = 0;
    let maxNString = 9999;
    let k;

    for (let i = 1; i < strs.length; i++) {

        newString = strs[i]
        let j = newString.length
        k = 0;
        l = compare.length;

        while (k < j && l > 0) {
            if (compare[k] == newString[k]) {
                prevnumOfString += 1
            } else {
                numOfString = Math.min(numOfString, prevnumOfString)
                break;
            }
            k++;
            l--;
        }
        numOfString = Math.min(maxNString, prevnumOfString) // 4
        maxNString = prevnumOfString // 4

        console.log(numOfString)
        prevnumOfString = 0;
    }

    if (numOfString == 0) return ""
    output = compare.substr(0, numOfString);
    return output;

};