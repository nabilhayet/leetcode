var maxDepth = function (root) {

    if (!root) return 0

    let left = maxDepth(root.left)
    let right = maxDepth(root.right)

    let count = Math.max(left, right)

    return count + 1
};