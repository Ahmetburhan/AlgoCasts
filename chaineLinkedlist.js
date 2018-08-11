// Advanced Solution

class Node {
    constructor {

    }

}
function getIntersectionNode(headA, headB) {
    let currentA = headA;
    let currentB = headB;
    let aLength = 0;
    let bLength = 0;
    while (currentA != null) {
        aLength += 1
        currentA = currentA.next;
    }
    while (currentB != null) {
        aLength += 1
        currentB = currentB.next;
    }

    console.log()
    return currentA;

}