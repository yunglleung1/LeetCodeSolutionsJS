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
 //given the head of a singly linked list, reverse the linked list
var reverseList = function(head) {
    let curr = head;
    let prv = null;
    let nx;

    if(curr){
        while(curr.next){
            nx = curr.next

            curr.next = prv;//reverse

            prv = curr;
            curr = nx;
        }

        curr.next = prv;//reverse last node
    }


    return curr;

};
