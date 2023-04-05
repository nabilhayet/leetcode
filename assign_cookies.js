/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {

    g.sort(function (a, b) { return b - a });
    s.sort(function (a, b) { return b - a });

    let count = 0;
    let index = 0

    for (let i = 0; i < s.length; i++) {

        // while(s[i] >= g[index]){
        //         count+=1
        //         s[i] = s[i] - g[index]
        //         index+=1

        // 

        if (s[i] >= g[i]) {

            index = g.indexOf(s[i], index)
            console.log(index)
            if (index > -1) {
                count += 1
                index += 1
            }
        }
    }

    return count;
};