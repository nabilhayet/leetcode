var removeNthFromEnd = function (head, n) {

    let arr = []
    let res = new ListNode()
    let copy = res

    while (head) {
        arr.push(head.val)
        head = head.next
    }

    for (let i = 0; i < arr.length; i++) {

        if (arr.length - i == n) continue

        copy.next = new ListNode(arr[i])
        copy = copy.next
    }

    return res.next
};