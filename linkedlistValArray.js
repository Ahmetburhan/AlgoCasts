class Node {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}
let n1 = new Node(1)
let n2 = new Node(2)
let n3 = new Node(3)


n1.next = n2
n2.next = n3
console.log(n1)
let display = function (node) {
    let result = []
    console.log(node.val)
    while (node) {
        result.push(node.val)
        node = node.next;
    }
    return result

}

display(n1)