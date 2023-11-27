var KthLargest = function (k, nums) {
    this.num = nums
    this.target = k
};

KthLargest.prototype.add = function (val) {
    this.num.push(val)
    this.num.sort((a, b) => a - b)
    return this.num[this.num.length - this.target]
};