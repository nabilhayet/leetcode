/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {

    var findContentChildren = function (g, s) {

        g.sort((a, b) => a - b);
        s.sort((a, b) => a - b);

        let res = 0
        let currChild = 0

        for (let i = 0; i < s.length; i++) {
            if (g[currChild] <= s[i]) {
                currChild++
                res++
            }
        }

        return res
    };
};