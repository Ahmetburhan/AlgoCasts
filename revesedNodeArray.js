/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


class Node {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}
let n1 = new Node(1)
let n2 = new Node(2)
let n3 = new Node(3)
let n4 = new Node(4)
let n5 = new Node(5)
let n6 = new Node(6)


n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
n5.next = n6
console.log(n1)




// The recursive idea is simple:

// reverse the tail
// link the second node to the head
// unlink the head (link to null)

// null <- 1  2 -> 3 -> 4 -> 5 -> null
// prev  head next
var reverseList = function (head) {
    let prev = null;
    while (head) {
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next

    }
    return prev

};


let reversed = reverseList(n1)


let reverseArray = function (node) {
    let result = []
    while (node) {
        result.push(node.val)
        node = node.next

    }
    return result
}

reverseArray(reversed)