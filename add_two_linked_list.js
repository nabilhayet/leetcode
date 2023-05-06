var addTwoNumbers = function (l1, l2) {

    let resultNode = new ListNode(0, null)
    let carry = 0
    let traverse = resultNode

    while (l1 != null || l2 != null) {

        const x = l1 && l1.val ? l1.val : 0
        const y = l2 && l2.val ? l2.val : 0
        const sum = x + y + carry

        traverse.next = new ListNode(sum % 10, null)
        carry = Math.floor(sum / 10)
        traverse = traverse.next

        if (l1 != null) l1 = l1.next
        if (l2 != null) l2 = l2.next

    }

    if (carry > 0) {
        traverse.next = new ListNode(carry, null)
    }

    return resultNode.next
};
