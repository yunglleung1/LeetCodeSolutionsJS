//given linked lists l1 & l2, merge them
var mergeTwoLists = function(l1, l2) {//solution is merge
    let mR = new ListNode(0);
    let head = mR;//store reference to head node
    while(l1 && l2){
        if(l1.val < l2.val){
            mR.next = l1;
            l1 = l1.next;
            mR = mR.next;
        }else {
            mR.next = l2;
            l2 = l2.next;
            mR = mR.next;
        }
    }

    while(l1){
        mR.next = l1;
        l1 = l1.next;
        mR = mR.next;
    }

    while(l2){
        mR.next = l2;
        l2 = l2.next;
        mR = mR.next;
    }

    return head.next;//returns first node attach

};
