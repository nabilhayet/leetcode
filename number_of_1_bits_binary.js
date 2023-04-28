var hammingWeight = function (n) {

    console.log(n.toString(2).split("0"))

    return n.toString(2).split("0").join("").length;
};